import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestApplicationComponent } from './request-application.component';

describe('RequestApplicationComponent', () => {
  let component: RequestApplicationComponent;
  let fixture: ComponentFixture<RequestApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
