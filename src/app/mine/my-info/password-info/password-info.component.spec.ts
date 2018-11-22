import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInfoComponent } from './password-info.component';

describe('PasswordInfoComponent', () => {
  let component: PasswordInfoComponent;
  let fixture: ComponentFixture<PasswordInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
