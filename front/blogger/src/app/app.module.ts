import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, withFetch, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularEditorModule, AngularEditorConfig} from '@kolkov/angular-editor';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlogComponent } from './components/flog/flog.component';
import { BlogDisplayComponent } from './components/blog-display/blog-display.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { UserDashComponent } from './components/user-dash/user-dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const editorConfig: AngularEditorConfig = {
  editable: true,
  spellcheck: true,
  height: 'auto',
  minHeight: '200px',
  placeholder: 'Enter text here...',
  translate: 'no',
  defaultFontName: 'Arial',
  defaultFontSize: '3',
  fonts: [
    { class: 'arial', name: 'Arial' },
    { class: 'times-new-roman', name: 'Times New Roman' },
    { class: 'calibri', name: 'Calibri' },
    { class: 'comic-sans-ms', name: 'Comic Sans MS' }
  ],
  toolbarHiddenButtons: [
    ['insertImage', 'insertVideo']
  ]
};

@NgModule({
  declarations: [
    AppComponent,
    FlogComponent,
    BlogDisplayComponent,
    LoginComponent,
    ProfileComponent,
    AccountSettingsComponent,
    UserDashComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularEditorModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    { provide: 'angular-editor.config', useValue: editorConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
