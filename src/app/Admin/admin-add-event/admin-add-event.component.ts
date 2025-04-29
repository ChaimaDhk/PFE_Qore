import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { EventsService } from 'src/app/services/events.service';
import { UsersService } from 'src/app/services/users.service';
import sweetalert2 from 'sweetalert2'
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-admin-add-event',
  templateUrl: './admin-add-event.component.html',
  styleUrls: ['./admin-add-event.component.css']
})
export class AdminAddEventComponent implements OnInit {
  event: any = {};
  eventForm!:FormGroup;
  id:any;
  title:any;
  events:any;
  imagePreview:any;
  category:any;
  liste:any;
  users :any=[] ;
  submitted = false;
  constructor(private formBuilder:FormBuilder ,private CategorysService:CategoryService, private activatedRoute:ActivatedRoute ,
    private eventsService:EventsService, private userService: UsersService) { }

  ngOnInit() {
    this.id= this.activatedRoute.snapshot.paramMap.get(`id`);
    if (this.id) {
      //edit
      this.title="Edit";
      this.id =this.activatedRoute.snapshot.paramMap.get('id');
    console.log('my id',this.id);
    this.events=JSON.parse(localStorage.getItem("events") || "[]");

       this.eventsService.getEvent(this.id).subscribe(
      (data)=>{
        this.event =data.event;
      })
  
      
    } else {
      //add
      this.title="Add";
    }
    //creation des inputs
    this.eventForm =this.formBuilder.group({
      name: ['', Validators.required],
      date: ['', Validators.required], 

     place: ['', Validators.required],
     category: ['', Validators.required],
      description: ['', Validators.required] ,
       price: ['', Validators.required],
       img:[''],
       Qte:['', Validators.required]


    });
    this.CategorysService.getCategorys().subscribe(
      (data)=>{
        console.log(data.categorys);
      this.category = data.categorys;
  })
  }
  addOrEditEvent(c:any) {
    this.submitted = true;
 
    // stop here if form is invalid
    if (this.eventForm.invalid) {
        return;
    }
  // display form values on success
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Added',
    showConfirmButton: false,
    timer: 1500
  })

    if (this.id) {
      console.log("my event",this.event)
    
      this.eventsService.updateEvent(this.event,this.eventForm.value.img).subscribe(
        (data)=>{
          console.log(data.message);
        })
    } else {
   

      this.eventsService.addEvent(c,this.eventForm.value.img).subscribe(
        (data)=>{
        console.log(data.message);
       
      
  this.userService.getUsers().subscribe(
    (data)=>{
   console.log(data.users);
   this.liste=data.users;
    for (let i = 0; i <  this.liste.length; i++) {
      if(this.liste[i].role == 'user'){
      this.users.push(this.liste[i].email);
    }
   
   console.log( this.users)
   
  this.eventsService.newsletter(this.users).subscribe(
    (data)=>{
   console.log(data.message);
    }) 
  }
   })
   });
  }
 
 
}

get f() { return this.eventForm.controls; }


onReset() {
    this.submitted = false;
    this.eventForm.reset();
}
  onImageSelected(event: Event) {
    //Selection du fichier
    const file = (event.target as HTMLInputElement).files![0];
    // Ajout d'un attribut img dans l'objet Event
    this.eventForm.patchValue({ img: file });
    // Mise à jour des valeurs du form
    this.eventForm.updateValueAndValidity();
    // Creation d'une variable reader pour lire le contenu de fichiers
    const reader = new FileReader();
    //Déclenchement du event load lors d'une lecture de fichier avec succès
    reader.onload = () => {
      //affecter le résultat de la lecture dans la variable imagePreview
    this.imagePreview = reader.result as string
    };
    // lecture du contenu du fichier Blob ou File
    reader.readAsDataURL(file);
    }

}
