import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import{ utilisateur} from './utilisateur.model';
const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'mon-entete-personnalise':'maValeur',
    // 'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
  
  })
};

@Injectable({
  providedIn: 'root'
})
export class UtlisateurService {
  //uri = 'http://192.168.50.19:8000';
  APIUrl = "http://192.168.50.19:8000/utilisateur/";
  // urlApi = "http://192.168.50.19:8000/specialite/";
  
  constructor(private http: HttpClient ) { }
  
  ajouterUtilisateur(nom, prenoms, email,age,status,specialite) {
    console.log(nom, prenoms, email,age,status,specialite);
    const obj = {
      nom,
      prenoms,
      email,
      age,
      status,
      specialite
    };
    
    
   
    this.http.post(`${this.APIUrl}`, obj , optionRequete 
)
        .subscribe(res => console.log('utilisateur enregistré'));
  }
  
  
  voirUtilisateur(){
    console.log('dknfknfdkln')
    return this.http.get<utilisateur[]>(this.APIUrl);
  }

  // voirSpecialite() {
  //   this.http.get(`${this.urlApi}` , optionRequete 
  //   )
  //           .subscribe(res => console.log('les specialite'));
  //     }
      

  
}