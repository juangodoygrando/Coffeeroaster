import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncompromisingQualityComponent } from './uncompromising-quality.component';

describe('UncompromisingQualityComponent', () => {
  let component: UncompromisingQualityComponent;
  let fixture: ComponentFixture<UncompromisingQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UncompromisingQualityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UncompromisingQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
