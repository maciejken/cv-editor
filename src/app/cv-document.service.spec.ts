import { TestBed } from '@angular/core/testing';

import { CvDocumentService } from './cv-document.service';

describe('CvDocumentService', () => {
  let service: CvDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
