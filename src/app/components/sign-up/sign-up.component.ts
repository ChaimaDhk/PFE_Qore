import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { MustMatch } from '../signUp.Validator';
import { UsersService } from 'src/app/services/users.service';
import sweetalert2 from 'sweetalert2'
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm !: FormGroup;
 id:any;
 title:any;
 user:any;
 registerForm!: FormGroup;
 imagePreview:any;
 submitted = false;

  constructor(private formBuilder :FormBuilder,private activatedRoute:ActivatedRoute, private router:Router,  private userService:UsersService, private eventsService:EventsService) { }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.paramMap.get(`id`);
    if (this.id) {
      //edit
      this.title="Edit";
      this.id =this.activatedRoute.snapshot.paramMap.get('id');
    console.log('my id',this.id);
   

    // for (let i = 0; i < this.events.length; i++) {
    //   if (this.events[i].id == this.id) {
    //     this.event =this.events[i];
    //     console.log('my event' ,this.event);
    //   }
      
    // } 
       this.userService.getUser(this.id).subscribe(
      (data)=>{
        this.user =data.user;
      })
  
      
    } else {
      //add
      this.title="Sign Up";
    }
     //creation des inputs
     this.registerForm = this.formBuilder.group({
     
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      tel: ['', Validators.required, Validators.minLength(8)],
      // validates date format yyyy-mm-dd
      // dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      img:[''],
    
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
}

signup(c:any){
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  // display form values on success
  Swal.fire({
    title: 'Welcome',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
  this.router.navigate(['login']);
  if (this.id) {
  this.userService.updateUser(this.user).subscribe(
    (data)=>{
      console.log(data.message);
    });
  } else {
// let users= JSON.parse(localStorage.getItem("users") || "[]");
// let idUsers= JSON.parse(localStorage.getItem("idUsers") || "1");
// c.id = idUsers;
// c.role="user";
// users.push(c);
// localStorage.setItem("users",JSON.stringify(users));
// localStorage.setItem("idUser", idUsers+1);
//  this.router.navigate(['']);
this.userService.signUp(c,this.registerForm.value.img).subscribe(
  (data)=>{
  console.log(data.message);
  }
)

this.userService.welcome(c).subscribe(
  (data)=>{
 console.log(data.message);
  } 
)}



}
get f() { return this.registerForm.controls; }

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}
onImageSelected(event: Event) {
  //Selection du fichier
  const file = (event.target as HTMLInputElement).files![0];
  // Ajout d'un attribut img dans l'objet Event
  this.registerForm.patchValue({ img: file });
  // Mise à jour des valeurs du form
  this.registerForm.updateValueAndValidity();
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
