import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtlisateurService } from '../utlisateur.service';

@Component({
  selector: 'app-ajouter-utlisateur',
  templateUrl: './ajouter-utlisateur.component.html',
  styleUrls: ['./ajouter-utlisateur.component.css']
})
export class AjouterUtlisateurComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: UtlisateurService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
     nom: ['', Validators.required ],
     prenoms: ['', Validators.required ],
     email: ['', Validators.required ],
     age: ['', Validators.required ],
     status: ['', Validators.required ],
    specialite: ['', Validators.required ]
    });
  }

  ajouterUtilisateur(nom,prenoms, email,age, status , specialite) {
    
    this.ps.ajouterUtilisateur(nom,prenoms,  email, age, status , specialite);
  }

  ngOnInit() {
  
    
  }

}