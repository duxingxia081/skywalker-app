import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyMyActivityComponent } from './modify-my-activity.component';

describe('ModifyMyActivityComponent', () => {
  let component: ModifyMyActivityComponent;
  let fixture: ComponentFixture<ModifyMyActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyMyActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyMyActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
