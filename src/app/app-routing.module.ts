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
import { ListRendezVousPatientComponent } from './rendez-vous/list-rendez-vous-patient/list-rendez-vous-patient.component';
import { HomePatientComponent } from './home/home-patient/home-patient.component';
import { HomeMecedinComponent } from './home/home-mecedin/home-mecedin.component';

const routes: Routes = [
  //Admin
  {path : 'home/list-patient', component: ListPatientsComponent, canActivate: [AuthenticationGuard]},

  {path : 'list-patient', component: ListPatientsComponent, canActivate: [AuthenticationGuard]},

  {path : 'creerCompteMedecin' , component: AddMedecinComponent},
  {path : 'creerComptePatient' , component: AddPatientComponent},

  {path : 'edit-patient/:id', component: AddPatientComponent, canActivate: [AuthenticationGuard]},
  {path : 'edit-medecin/:id', component: AddMedecinComponent, canActivate: [AuthenticationGuard]},

  {path : 'patient/:id', component: HomePatientComponent, canActivate: [AuthenticationGuard]},
  {path : 'medecin/:id', component: HomeMecedinComponent, canActivate: [AuthenticationGuard]},

  {path : 'patient/:id/list-medecin', component: ListMedecinsComponent, canActivate: [AuthenticationGuard]},
  
  {path : 'home/:id/list-medecin/edit-medecin/:med_id', component: AddMedecinComponent, canActivate: [AuthenticationGuard]},

  {path : 'patient/:id/list-rendez-vous', component: ListRendezVousPatientComponent, canActivate: [AuthenticationGuard]},
  {path : 'medecin/:id/list-rendez-vous', component: ListRendezVousComponent, canActivate: [AuthenticationGuard]},

  {path : 'patient/:id/list-rendez-vous/new-rendez-vous' , component: AddRendezVousComponent, canActivate: [AuthenticationGuard]},
  {path : 'patient/:id/list-rendez-vous/edit-rendez-vous/:rendez_vous_id' , component: AddRendezVousComponent, canActivate: [AuthenticationGuard]},

  {path : 'medecin/:id/list-dossiers', component: ListDossiersComponent, canActivate: [AuthenticationGuard]},
  {path : 'medecin/:id/list-dossiers/new-dossier' , component: AddDossierComponent, canActivate: [AuthenticationGuard]},
  {path : 'medecin/:id/list-dossiers/edit-dossier/:dossier_id' , component: AddDossierComponent, canActivate: [AuthenticationGuard]},
  {path : 'medecin/:id/list-dossiers/edit-dossier/:dossier_id/new-consultation' , component: AddConsultationComponent, canActivate: [AuthenticationGuard]},
  {path : 'medecin/:id/list-dossiers/edit-dossier/:dossier_id/edit-consultation/:consult_id' , component: AddConsultationComponent, canActivate: [AuthenticationGuard]},
  {path : '', component: LoginComponent,  pathMatch: 'full' , canActivate: [AuthenticationGuard]},
  {path : 'login', component: LoginComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
