import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.development';
import { CrudComponent } from './pages/crud/crud.component';
import { ModalViewUserComponent } from './pages/crud/modal-view-user/modal-view-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalFormUserComponent } from './pages/crud/modal-form-user/modal-form-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    CrudComponent,
    ModalViewUserComponent,
    ModalFormUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [
    provideAnimationsAsync(),
    // provideFirebaseApp(() => initializeApp({ "projectId": "crud-usuarios-angular-b72aa", "appId": "1:713297389934:web:7e460731c07c82670f397f", "storageBucket": "crud-usuarios-angular-b72aa.appspot.com", "apiKey": "AIzaSyDAPXfSty5MyTNbgnswf8kiiHaMFbRDS7c", "authDomain": "crud-usuarios-angular-b72aa.firebaseapp.com", "messagingSenderId": "713297389934" })),
    // provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
