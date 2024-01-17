import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeLineChartComponent } from './mfe-line-chart.component';

describe('MfeLineChartComponent', () => {
  let component: MfeLineChartComponent;
  let fixture: ComponentFixture<MfeLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfeLineChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MfeLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
