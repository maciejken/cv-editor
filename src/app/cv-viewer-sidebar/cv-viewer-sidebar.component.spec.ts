import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvViewerSidebarComponent } from './cv-viewer-sidebar.component';

describe('CvViewerSidebarComponent', () => {
  let component: CvViewerSidebarComponent;
  let fixture: ComponentFixture<CvViewerSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvViewerSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvViewerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
