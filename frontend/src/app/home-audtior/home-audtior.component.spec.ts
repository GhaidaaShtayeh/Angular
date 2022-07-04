import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAudtiorComponent } from './home-audtior.component';

describe('HomeAudtiorComponent', () => {
  let component: HomeAudtiorComponent;
  let fixture: ComponentFixture<HomeAudtiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAudtiorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAudtiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
