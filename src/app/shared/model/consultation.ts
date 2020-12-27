import { Dossier } from "./dossier";
import { Medecin } from "./medecin";
import { Patient } from "./patient";

export class Consultation{
    id: number;
    details: string;
    maladie: string;
    medecinConsult: Medecin;
    patientC: Patient;
    dossier: Dossier;
    treatement: string;

    constructor (){
        this.id=null;
        this.details='';
        this.maladie='';
        this.treatement='';
        this.medecinConsult=null;
        this.patientC=null;
        this.dossier=null;
      }
}