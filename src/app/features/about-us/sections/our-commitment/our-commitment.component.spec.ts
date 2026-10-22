import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCommitmentComponent } from './our-commitment.component';

describe('OurCommitmentComponent', () => {
  let component: OurCommitmentComponent;
  let fixture: ComponentFixture<OurCommitmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurCommitmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurCommitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
