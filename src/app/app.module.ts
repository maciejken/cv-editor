import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvViewerComponent } from './cv-viewer/cv-viewer.component';
import { CvEditorComponent } from './cv-editor/cv-editor.component';
import { CvViewerSidebarComponent } from './cv-viewer-sidebar/cv-viewer-sidebar.component';
import { SafePipe } from './safe.pipe';
import { CvViewerMainComponent } from './cv-viewer-main/cv-viewer-main.component';

@NgModule({
  declarations: [
    AppComponent,
    CvViewerComponent,
    CvEditorComponent,
    CvViewerSidebarComponent,
    SafePipe,
    CvViewerMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
