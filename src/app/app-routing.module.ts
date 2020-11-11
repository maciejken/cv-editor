import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvViewerComponent } from './cv-viewer/cv-viewer.component';
import { CvEditorComponent } from './cv-editor/cv-editor.component';

const routes: Routes = [
  { path: 'documents/:documentId', component: CvViewerComponent },
  { path: 'documents/:documentId/edit', component: CvEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
