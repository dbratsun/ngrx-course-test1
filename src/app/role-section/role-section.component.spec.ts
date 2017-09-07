import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleSectionComponent } from './role-section.component';

describe('RoleSectionComponent', () => {
  let component: RoleSectionComponent;
  let fixture: ComponentFixture<RoleSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
