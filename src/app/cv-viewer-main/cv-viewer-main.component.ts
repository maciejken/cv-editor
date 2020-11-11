import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CvDocumentService } from '../cv-document.service';
import { CvDocument } from '../model';

@Component({
  selector: 'cv-viewer-main',
  templateUrl: './cv-viewer-main.component.html',
  styleUrls: ['./cv-viewer-main.component.sass']
})
export class CvViewerMainComponent implements OnInit {
  
  document$: Observable<CvDocument> = this.cvDocumentService.getDocument();

  constructor(private cvDocumentService: CvDocumentService) { }

  ngOnInit(): void {
  }

}
