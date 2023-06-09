import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyPageComponent } from './ty-page.component';

describe('TyPageComponent', () => {
  let component: TyPageComponent;
  let fixture: ComponentFixture<TyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
