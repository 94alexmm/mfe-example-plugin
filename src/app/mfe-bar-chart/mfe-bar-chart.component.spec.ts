import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeBarChartComponent } from './mfe-bar-chart.component';

describe('MfeBarChartComponent', () => {
  let component: MfeBarChartComponent;
  let fixture: ComponentFixture<MfeBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfeBarChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MfeBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
