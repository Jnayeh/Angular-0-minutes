import { Medecin } from './medecin';
import { Patient } from './patient';

export class RendezVous{
    id: number;
    date: Date;
    detail: string;
    maladie: string; 
    verified: boolean;
    time: Date;
    medecin: Medecin;
    patient: Patient;
    
    constructor(){
        this.id=null;
        this.date=null;
        this.detail="";
        this.maladie="";
        this.time=null;
        this.medecin=null;
        this.patient=null;
        this.verified=false;
    }
}