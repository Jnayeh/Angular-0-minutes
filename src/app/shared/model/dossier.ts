import { Consultation } from './consultation';
import { Patient } from './patient';

export class Dossier{
    id: number;
    dateCreation: Date;
    consultations:Consultation[];
    patient:Patient;

    constructor (){
          this.id=null;
          this.dateCreation=new Date();
          this.consultations=[];
          this.patient=null;
        }
}