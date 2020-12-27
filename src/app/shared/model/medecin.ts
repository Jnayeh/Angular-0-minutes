import { Person } from './person';

export class Medecin  extends Person{
    speciality: string;
    constructor (){
      super();
        this.speciality=null;
        this.id=null;
        this.adresse='';
        this.email='';
        this.nom='';
        this.password='';
        this.rdvs=[];
        this.consultations=[];
        this.username='';
        this.role= "user" ;
      }
}
