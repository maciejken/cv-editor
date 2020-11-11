import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CvDocumentService } from '../cv-document.service';
import { CvDocument } from '../model';

@Component({
  selector: 'cv-viewer-sidebar',
  templateUrl: './cv-viewer-sidebar.component.html',
  styleUrls: ['./cv-viewer-sidebar.component.sass']
})
export class CvViewerSidebarComponent implements OnInit {

  document$: Observable<CvDocument> = this.cvDocumentService.getDocument();

  constructor(
    private cvDocumentService: CvDocumentService,
    ) { }

  ngOnInit(): void {
  }

}
