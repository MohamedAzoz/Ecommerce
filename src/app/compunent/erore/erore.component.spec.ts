import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EroreComponent } from './erore.component';

describe('EroreComponent', () => {
  let component: EroreComponent;
  let fixture: ComponentFixture<EroreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EroreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EroreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
