import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSuperuserComponent } from './home-superuser.component';

describe('HomeSuperuserComponent', () => {
  let component: HomeSuperuserComponent;
  let fixture: ComponentFixture<HomeSuperuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSuperuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSuperuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
