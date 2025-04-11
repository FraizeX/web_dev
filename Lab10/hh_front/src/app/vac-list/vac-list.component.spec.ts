import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacListComponent } from './vac-list.component';

describe('VacListComponent', () => {
  let component: VacListComponent;
  let fixture: ComponentFixture<VacListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
