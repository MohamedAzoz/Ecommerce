import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdicuteComponent } from './prodicute.component';

describe('ProdicuteComponent', () => {
  let component: ProdicuteComponent;
  let fixture: ComponentFixture<ProdicuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdicuteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdicuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
