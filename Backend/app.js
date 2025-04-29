const express = require('express');
const mongoose = require('mongoose');
const Event = require('./Models/event');
const User =require('./Models/user');
const Messages =require('./Models/messages');
const Reserved_events=require('./Models/reservations');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { createEnumMember } = require('typescript');
const path = require('path');
const multer = require('multer');
const Category = require('./Models/category');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');



// const cors = require("cors");
// const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");
// app.use(cors({ origin: "*" }));

const app = express();

//utilisation du body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// access to folder images
app.use('/images', express.static(path.join('Backend/images')));

//Connexion BD
mongoose.connect('mongodb://localhost:27017/TSA_DB1', { useNewUrlParser: true, useUnifiedTopology: true });


// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

///********************** */ Config Multer ****************************
// Définition des extensions selon le type de media  
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        //Affecter  la destination
        cb(null, 'backend/images')
    },
    //file name
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '.' + extension;
        //Affecter file name
        cb(null, imgName);
    }
});

//************************************************Events*******************************************************

// Traitement de add Event 
app.post('/api/addEvent', multer({ storage: storage }).single('img'),(req, res) => {
    console.log('here in add event');
    let event = {};
    let url = req.protocol + '://' + req.get('host');
    console.log('here URL', url);
    event = new Event({
        name: req.body.name,
        date: req.body.date,
        place: req.body.place,
        category: req.body.category,
        description: req.body.description,
        Qte: req.body.Qte,
        price: req.body.price,
        img:url+'/images/' + req.file.filename

    });
    console.log('addded event', event);

    event.save();

    res.status(200).json({
        message: "added Event"

    });

});



// Traitement de get All events 
app.get('/api/allEvents', (req, res) => {
    console.log('Hello in BE to get all events');

    Event.find((err, docs) => {
        if (err) {
            console.log('Error in DB');
        }
        else {
            res.status(200).json({
                events: docs
            });
        }
    });



});

// Traitement de get event by id
app.get('/api/allEvents/:id', (req, res) => {
    console.log('Hello in BE to get event by id');
    let id;
    let event = {};
   
    id = req.params.id;
    console.log('id', id);

    Event.findOne({ _id: id }).then(
        (doc) => {
            console.log('Finded event', doc);
            res.status(200).json({
                event: doc

            });

        }
    )

});
// traitement edit event
app.put('/api/editEvent/:id', multer({ storage: storage }).single('img'),(req, res) => {
    console.log('here in edit event', req.body._id);
    console.log(req.body._id);
    console.log(req.body.name);
    console.log( req.file.filename);
    let url = req.protocol + '://' + req.get('host');
    console.log('here URL', url);
    let event = {
        _id: req.body._id,
        name: req.body.name,
        date: req.body.date,
        category: req.body.category,
        place: req.body.place,
        description: req.body.description,
        price: req.body.price,
        Qte: req.body.Qte,
        img:url+'/images/' +  req.file.filename
   

    };

    Event.updateOne({ _id: req.body._id }, event).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "edited successfuly"
                });
            }

        }
    )


});
// Traitement de Get Events By id

app.post('/api/getEventsById', (req, res) => {
  
        console.log('Hello in BE to get events by id');
    
        console.log('here search value', req.body.id);
        let searchedVal = req.body.id;
    
    
        Event.find({
            $or: [
                { id: { $regex: `.*${searchedVal}` } }]
        }).then(
            
                (doc) => {
                    console.log('Finded event', doc);
                    res.status(200).json({
                        event: doc
        
                    });
        
                }
            );
    });
    
// traitement delete event
app.delete('/api/deleteEvent/:id', (req, res) => {
    console.log('here in delete event');
    const id = req.params.id;
    console.log('id', id);
    Event.deleteOne({ _id: id }).then((result) => {
        console.log('Result after delete', result);
        if (result) {
            res.status(200).json({
                message: "Deleted successfuly"
            });
        }
    });

});


// Traitement de Get Events By Name

app.post('/api/getEventsByName', (req, res) => {
    console.log('Hello in BE to get events by name');

    console.log('here search value', req.body.search);
    let searchedVal = req.body.search;


    Event.find({
        $or: [
            { name: { $regex: `.*${searchedVal}` } }]
    }).then(
        (docs) => {
            if (docs) {
               
                res.status(200).json({
                    events: docs
                });
            }
        });
});


// Traitement de get users
app.get('/api/allUsers/:id', (req, res) => {
    console.log('Hello in BE to get User by id');
    let id;
    let user = {};
   
    id = req.params.id;
    console.log('id', id);

    User.findOne({ _id: id }).then(
        (doc) => {
            console.log('Finded user', doc);
            res.status(200).json({
                user: doc

            });

        }
    )

});
// Traitement de add User
app.post('/api/signUp', multer({ storage: storage }).single('img'),(req, res) => {
    console.log('here in add user');
    let event = {};
    let url = req.protocol + '://' + req.get('host');
    let user = {};
    bcrypt.hash(req.body.password,10).then(cryptedPwd =>{
    user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: cryptedPwd,
        role: "user",
        tel: req.body.tel,
        img:url+'/images/' + req.file.filename
    });
    console.log('added user', user);

    user.save();

    res.status(200).json({
        message: "added user"

    });

})
});

// traitement edit event
app.put('/api/editUser/:id', (req, res) => {
    console.log('here in edit user', req.body._id);
    let user = {
        _id: req.body._id,
        firstName: req.body.user.firstName,
        lastName: req.body.user.lastName,
        email: req.body.user.email,
        tel: req.body.user.tel,
    }; console.log(user);

    User.updateOne({ _id: req.body._id }, user).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "edited successfuly"
                });
            }

        }
    )


});

//changerPassword
app.post('/api/updatePwd',(req, res) => {
    console.log('here in edit password', req.body);
    bcrypt.hash(req.body.password.newPwd, 10).then(cryptedPwd => {
    let user = {
        _id: req.body.user._id,
  
        password: cryptedPwd,
       }
    User.findOne({ email: req.body.user.email }).then(
        (resultEmail) => {
            console.log('resultEmail', resultEmail);
            if (!resultEmail) {
                res.status(200).json({
                    findedUser: "0"
                });
            }

            return bcrypt.compare(req.body.password.oldPwd, resultEmail.password);
        })
        .then((resultPwd) => {
            console.log('resultPwd', resultPwd);
            if (!resultPwd) {
                res.status(200).json({
                    findedUser: "1"
                });
            } else {

                User.findOne({email: req.body.user.email}).then(
                            (result)=>{
                             
                                    console.log('result',result);
                                    res.status(200).json({
                                        findedUser:result
                                    })
                                
                            }
                        )


            }
           User.updateOne({ _id: req.body.user._id }, user).then(
            (result) => {
                if (result) {
                    res.status(200).json({
                        message: "edited successfuly"
                    });
                }
    
            }
        )  })
    });
});

//login 
app.post('/api/login', (req, res) => {
    console.log('here in login', req.body);
    // console.log('here in login pwd', req.body.password);

    User.findOne({ email: req.body.email }).then(
        (resultEmail) => {
            console.log('resultEmail', resultEmail);
            if (!resultEmail) {
                res.status(200).json({
                    findedUser: "Check you email"
                });
            }

            return bcrypt.compare(req.body.password, resultEmail.password);
        })
        .then((resultPwd) => {
            console.log('resultPwd', resultPwd);
            if (!resultPwd) {
                res.status(200).json({
                    findedUser: "check your password"
                });
            } else {

                User.findOne({email: req.body.email}).then(
                            (result)=>{
                             
                                    console.log('result',result);
                                    res.status(200).json({
                                        findedUser:result
                                    })
                                
                            }
                        )


            }
        });

});

// Traitement de get All Userss 
app.get('/api/allUsers', (req, res) => {
    console.log('Hello in BE to get all users');

    User.find((err, docs) => {
        if (err) {
            console.log('Error in DB');
        }
        else {
            res.status(200).json({
                users: docs
            });
        }
    });



}); 

// traitement delete user
app.delete('/api/deleteUser/:id', (req, res) => {
    console.log('here in delete User');
    const id = req.params.id;
    console.log('id', id);
    User.deleteOne({ _id: id }).then((result) => {
        console.log('Result after delete', result);
        if (result) {
            res.status(200).json({
                message: "Deleted successfuly"
            });
        }
    });

});




// Traitement de add Admins
app.post('/api/addAdmin',(req, res) => {
    console.log('here in add admin');
    let user = {};
    bcrypt.hash(req.body.password, 10).then(cryptedPwd => {
    user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: cryptedPwd,
        role: "admin",
        tel: req.body.tel
    });
    console.log('added admin', user);

    user.save();

    res.status(200).json({
        message: "added admin"

    });
})
});

// traitement get messages
app.get('/api/allMessages', (req, res) => {
    console.log('Hello in BE to get all messages');

    Messages.find((err, docs) => {
        if (err) {
            console.log('Error in DB');
        }
        else {
            res.status(200).json({
                messages: docs
            });
        }
    });



});

//traitement add messages
app.post('/api/contacts',(req, res) => {
    console.log('here in add messages');
    let messages = {};
    messages = new Messages({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    console.log('added message', messages);

    messages.save();

    res.status(200).json({
        messages: "added messages"

    });

});

// Traitement de get message by id
app.get('/api/allMessages/:id', (req, res) => {
    console.log('Hello in BE to get messages by id');
    let id;
    let message = {};
   
    id = req.params.id;
    console.log('id', id);

    Messages.findOne({ _id: id }).then(
        (doc) => {
            console.log('Finded message', doc);
            res.status(200).json({
                message: doc

            });

        }
    )

});

 // Traitement de get All categorys 
app.get('/api/allCategorys', (req, res) => {
    console.log('Hello in BE to get all categorys');

    Category.find((err, docs) => {
        if (err) {
            console.log('Error in DB');
        }
        else {
            res.status(200).json({
                categorys: docs
            });
        }
    });



});

// Traitement de add category
app.post('/api/addCategory',(req, res) => {
    console.log('here in add category');
    let category = {};
    category = new Category({
        name: req.body.name,
        description: req.body.description,
        
    });
    console.log('added category', category);

    category.save();

    res.status(200).json({
        message: "added category"

    });

});

//traitement delete category
app.delete('/api/deleteCategory/:id', (req, res) => {
    console.log('here in delete category');
    const id = req.params.id;
    console.log('id', id);
    Category.deleteOne({ _id: id }).then((result) => {
        console.log('Result after delete', result);
        if (result) {
            res.status(200).json({
                message: "Deleted successfuly"
            });
        }
    });

});

// Traitement de add reservation
app.post('/api/reservation',(req, res) => {
    console.log('here in add reservation');
    console.log( req.body.idEvent);
    console.log( req.body.idUser);
    console.log( req.body.qteRes);
    let reserved_events = {};  
    reserved_events = new Reserved_events({
  
        idEvent: req.body.idEvent,
        idUser: req.body.idUser,
        qteRes:req.body.qteRes,
        totalePrice:req.body.totalePrice
        
    }); console.log( req.body.idEvent);
    console.log( req.body.idUser);
    console.log( req.body.qteRes);
    console.log('added reservation', reserved_events);

    reserved_events.save().then(
        (result1)=> {
            console.log(result1);
            if (result1) {
                Event.findOne({_id:req.body.idEvent}).then(
                    (result)=> { 
                        
                        Event.updateOne({_id: req.body.idEvent}, {Qte: (result.Qte - req.body.qteRes) }).then(
                            (resultAfterEdit)=>{
                                console.log(resultAfterEdit);
                            }
                        )
                        res.status(200).json({
                            message: "added reservation"
                    
                        });
                        }
                    
                )
            }
        }
    );

    

});

//traitement get reservations
app.get('/api/allReservation/:id', (req, res) => {
    console.log('Hello in BE to get reservation by id');
    let id;
    let reserved_events = {};
   
    id = req.params.id;
    console.log('id', id);

    Reserved_events.findOne({ idUser: id }).then(
        (doc) => {
            console.log('Finded reservation', doc);
            res.status(200).json({
                reserved_events: doc

            });

        }
    )

});

// Traitement de get All reservations 
app.get('/api/allReservations', (req, res) => {
    console.log('Hello in BE to get all reservations');

    Reserved_events.find((err, docs) => {
        if (err) {
            console.log('Error in DB');
        }
        else {
            res.status(200).json({
                reserved_events: docs
            });
        }
    });



});

// Traitement de Get Events By Name
  app.post('/api/reservations', (req, res) => {
                console.log('here in app');
                console.log(req.body);
                const output = `
                  <h3>Confirmation</h3>
                  <p><br> we confirm that you've reserve an event </p>
                `;
                const mail = `
                
                ${req.body.email}
              `;
            
                // create reusable transporter object using the default SMTP transport
                let transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true, // true for 465, false for other ports
                  auth: {
                      user: 'tunisia.sports.adventures@gmail.com', // generated ethereal user
                      pass: 'tunisia2021'  // generated ethereal password
                  },
                  tls:{
                    rejectUnauthorized:false
                  }
                });
              
                // setup email data with unicode symbols
                let mailOptions = {
                    from: '"TSA" <tunisia.sports.adventures@gmail.com>', // sender address
                    to: mail, // list of receivers
                    subject: 'confirmation', // Subject line
                    text: 'confirmation', // plain text body
                    html: output // html body
                };
              
                // send mail with defined transport object
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message sent: %s', info.messageId);   
                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
              
                   console.log('message has send',mailOptions)
                });
                });


 // Traitement de Get Events By Name
app.post('/api/getEventsByCategorie', (req, res) => {
    console.log('Hello in BE to get events by category');

    console.log('here search value', req.body.search);
    let searchedVal = req.body.search;


    Event.find({
        $or: [
            { category: { $regex: `.*${searchedVal}` } }]
    }).then(
        (docs) => {
            if (docs) {
               
                res.status(200).json({
                    events: docs
                   
                });
              
            }
        });
});

//traitement delete reservation
app.delete('/api/deleteReservation/:id', (req, res) => {
    console.log('here in delete reservation');
    const id = req.params.id;
    console.log('id', id);
    Reserved_events.findOne({_id: id}) .then(
        (result)=> {
                console.log(result);
            if (result) {
                Event.findOne({_id: result.idEvent}).then(
                    (result1)=> {
                        Event.updateOne({_id: result1._id}, {Qte:( Number(result1.Qte) + Number(result.qteRes)) }).then(
                            (resultAfterEdit)=>{
                                console.log(resultAfterEdit);
                            }
                         ) }
                )
            }
        })
    Reserved_events.deleteOne({ _id: id }).then((result) => {
        console.log('Result after delete', result);
        if (result) {
            res.status(200).json({
                message: "Deleted successfuly"
            });
        }
    });

});

//traitemanet edit  Quantity
app.put('/api/editQte/:id',(req, res) => {
    console.log('here in edit event', req.body.id);
    console.log(req.body.qte);
    Reserved_events.findOne({_id: req.body.id}).then(
        (result)=> {
                console.log(result)
                if (result) {
                    console.log("reserved",result.qteRes);
                    Reserved_events.updateOne({_id: result._id},{qteRes:req.body.qte}).then(
                        (resultedit)=>{
                        console.log("edit",resultedit)
                    
                   
                    if (result) {
                        Event.findOne({_id: result.idEvent}).then(
                            (resultfind)=> {
                                console.log(result.qteRes - req.body.qte);
                                console.log("find",resultfind);
                                Event.updateOne({_id: resultfind._id}, {Qte: Number(resultfind.Qte) + Number(result.qteRes - req.body.qte)}).then(
                                    (resultAfterEdit)=>{
                                        console.log(resultAfterEdit);
                                    } )
                                    Reserved_events.updateOne({_id: result._id},{totalePrice: req.body.qte*resultfind.price}).then(
                                        (resultedit)=>{
                                        console.log("edit",resultedit)
                                    
                                         } )}
                        )
                    }
                } )}
               
            
            })
   


});

/************************************************************emails***************************************************** */
app.post('/api/send', (req, res) => {
    console.log('here in app');
    console.log(req.body);
    const output = `
      <h3>Message</h3>
      <p>${req.body.reply}</p>
    `;
    const mail = `
    
    ${req.body.email}
  `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
      auth: {
          user: 'tunisia.sports.adventures@gmail.com', // generated ethereal user
          pass: 'tunisia2021'  // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
    });
  
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"TSA" <tunisia.sports.adventures@gmail.com>', // sender address
        to: mail, // list of receivers
        subject: 'Response', // Subject line
        text: 'Response', // plain text body
        html: output // html body
    };
  
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
       console.log('message has send',mailOptions)
    });
    });


 app.post('/api/news', (req, res) => {
        console.log('here in app news');
        console.log(req.body);
      
        const output = `
          <h3>Hey we hope that you visit our website we have a new events pablished </h3>
         
        `;
        const mail = `
        
        ${req.body}
      `;
    
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // true for 465, false for other ports
          auth: {
              user: 'tunisia.sports.adventures@gmail.com', // generated ethereal user
              pass: 'tunisia2021'  // generated ethereal password
          },
          tls:{
            rejectUnauthorized:false
          }
        });
      
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"TSA" <tunisia.sports.adventures@gmail.com>', // sender address
            to: mail, // list of receivers
            subject: 'News', // Subject line
            text: 'news', // plain text body
            html: output // html body
        };
      
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);   
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      
           console.log('message has send',mailOptions)
        });
        });


 app.post('/api/welcome', (req, res) => {
            console.log('here in app');
            console.log(req.body);
            const output = `
              <h3>Welcome</h3>
              <p>Welcome <br> we are happy that you sign to our website. </p>
            `;
            const mail = `
            
            ${req.body.email}
          `;
        
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true, // true for 465, false for other ports
              auth: {
                  user: 'tunisia.sports.adventures@gmail.com', // generated ethereal user
                  pass: 'tunisia2021'  // generated ethereal password
              },
              tls:{
                rejectUnauthorized:false
              }
            });
          
            // setup email data with unicode symbols
            let mailOptions = {
                from: '"TSA" <tunisia.sports.adventures@gmail.com>', // sender address
                to: mail, // list of receivers
                subject: 'WELCOME', // Subject line
                text: 'welcome', // plain text body
                html: output // html body
            };
          
            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);   
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
          
               console.log('message has send',mailOptions)
            });
            });


        
module.exports = app;
