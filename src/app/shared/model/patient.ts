import { Dossier } from './dossier';
import {Person} from './person';

export class Patient extends Person{
    dossierMedical: Dossier;
    constructor(){
        super();
        this.id=null;
        this.adresse='';
        this.email='';
        this.nom='';
        this.password='';
        this.rdvs=[];
        this.consultations=[];
        this.username='';
        this.dossierMedical=null;
        this.role= "user" ;
      }
}
