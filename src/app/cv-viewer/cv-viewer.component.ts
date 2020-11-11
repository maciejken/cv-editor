import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CvDocumentService } from '../cv-document.service';

@Component({
  selector: 'cv-viewer',
  templateUrl: './cv-viewer.component.html',
  styleUrls: ['./cv-viewer.component.scss']
})
export class CvViewerComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cvDocumentService: CvDocumentService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cvDocumentService.fetchDocument(params['documentId']);
    });
  }

}
