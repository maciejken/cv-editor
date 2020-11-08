import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvViewerMainComponent } from './cv-viewer-main.component';

describe('CvViewerMainComponent', () => {
  let component: CvViewerMainComponent;
  let fixture: ComponentFixture<CvViewerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvViewerMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvViewerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
