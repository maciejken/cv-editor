import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvViewerComponent } from './cv-viewer/cv-viewer.component';
import { CvEditorComponent } from './cv-editor/cv-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    CvViewerComponent,
    CvEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
