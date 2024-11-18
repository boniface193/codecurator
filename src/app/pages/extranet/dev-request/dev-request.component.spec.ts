import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevRequestComponent } from './dev-request.component';

describe('DevRequestComponent', () => {
  let component: DevRequestComponent;
  let fixture: ComponentFixture<DevRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
