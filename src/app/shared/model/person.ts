import { Consultation } from './consultation';
import { RendezVous } from './rendez-vous';

export class Person {
    id: number;
    nom: string;
    prenom: string;
    adresse: string;
    email: string;
    username: string;
    password: string;
    rdvs: RendezVous[];
    consultations: Consultation[];
    role: string;
    constructor(){
      this.id=null;
      this.adresse='';
      this.email='';
      this.nom='';
      this.password='';
      this.rdvs=[];
      this.consultations=[];
      this.username='';
      this.role= "" ;
    }
  }
  