import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CvDocument } from './model';

@Injectable({
  providedIn: 'root'
})
export class CvDocumentService {

  constructor(private http: HttpClient) { }

  private document = new Subject<CvDocument>();

  public fetchDocument(id: number) {
    this.http.get(`/assets/cv/${id}.json`).subscribe((doc: CvDocument) => {
      this.document.next(doc);
    });
  }

  public getDocument() {
    return this.document.asObservable();
  }

}
