import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListPatientsComponent} from './patients/list-patients/list-patients.component';
import {AddPatientComponent} from './patients/add-patient/add-patient.component';
import { HomeComponent } from './admin/home/home.component';
import { AddMedecinComponent } from './medecins/add-medecin/add-medecin.component';
import { ListMedecinsComponent } from './medecins/list-medecins/list-medecins.component';
import { AddRendezVousComponent } from './rendez-vous/add-rendez-vous/add-rendez-vous.component';
import { ListRendezVousComponent } from './rendez-vous/list-rendez-vous/list-rendez-vous.component';
import { AddDossierComponent } from './dossiers/add-dossier/add-dossier.component';
import { ListDossiersComponent } from './dossiers/list-dossiers/list-dossiers.component';
import { AddConsultationComponent } from './consultations/add-consultation/add-consultation.component';
import { LoginComponent } from './login/login.component';
import {AuthenticationGuard} from './shared/auth/authentication.guard';

const routes: Routes = [

  {path : 'home/:id/list-patient', component: ListPatientsComponent, canActivate: [AuthenticationGuard]},
  {path : 'list-patient', component: ListPatientsComponent, canActivate: [AuthenticationGuard]},
  {path : 'home/:id/list-patient/new-patient' , component: AddPatientComponent, canActivate: [AuthenticationGuard]},
  {path : 'creerCompte' , component: AddPatientComponent, canActivate: [AuthenticationGuard]},
  {path : 'home/:id', component: HomeComponent, canActivate: [AuthenticationGuard]},
  {path : 'home/:id/list-patient/edit-patient/:pat_id' , component: AddPatientComponent, canActivate: [AuthenticationGuard]},
  {path : 'home/:id/list-medecin', component: ListMedecinsComponent, canActivate: [AuthenticationGuard]},
  {path : 'home/:id/list-medecin/new-medecin' , component: AddMedecinComponent, canActivate: [AuthenticationGuard]},
  {path : 'home/:id/list-medecin/edit-medecin/:med_id' , component: AddMedecinComponent, canActivate: [AuthenticationGuard]},
  {path : 'home/:id/list-rendez-vous', component: ListRendezVousComponent, canActivate: [AuthenticationGuard]},
  {path : 'patient/:pat_id/new-rendez-vous' , component: AddRendezVousComponent, canActivate: [AuthenticationGuard]},
  {path : 'home/:id/list-rendez-vous/new-rendez-vous' , component: AddRendezVousComponent, canActivate: [AuthenticationGuard]},
  {path : 'patient/:pat_id/edit-rendez-vous/:rendez_vous_id' , component: AddRendezVousComponent, canActivate: [AuthenticationGuard]},
  {path : 'home/:id/edit-rendez-vous/:rendez_vous_id' , component: AddRendezVousComponent, canActivate: [AuthenticationGuard]},
  {path : 'home/:id/list-dossiers', component: ListDossiersComponent, canActivate: [AuthenticationGuard]},
  {path : 'home/:id/new-dossier' , component: AddDossierComponent, canActivate: [AuthenticationGuard]},
  {path : 'home/:id/edit-dossier/:dossier_id' , component: AddDossierComponent, canActivate: [AuthenticationGuard]},
  {path : 'home/:id/edit-dossier/:dossier_id/new-consultaion' , component: AddConsultationComponent, canActivate: [AuthenticationGuard]},
  {path : 'home/:id/edit-dossier/:dossier_id/edit-consultation/:consult_id' , component: AddConsultationComponent, canActivate: [AuthenticationGuard]},
  {path : 'login', component: LoginComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
