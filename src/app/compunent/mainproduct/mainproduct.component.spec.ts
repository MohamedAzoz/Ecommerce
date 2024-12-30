import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainproductComponent } from './mainproduct.component';

describe('MainproductComponent', () => {
  let component: MainproductComponent;
  let fixture: ComponentFixture<MainproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
