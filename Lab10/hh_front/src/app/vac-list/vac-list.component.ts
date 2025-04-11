import { Component, OnInit } from '@angular/core';
import {Vacancy} from '../models';
import {VacancyService} from '../vacancy.service';
import {ActivatedRoute} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-vac-list',
  imports: [CommonModule],
  templateUrl: './vac-list.component.html',
  styleUrl: './vac-list.component.css'
})
export class VacListComponent implements OnInit {
  companyId!: number;
  vacancies: Vacancy[] = [];

  constructor(private vacancyService: VacancyService, private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    const companyId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.loadVacancies(companyId);
  }

  loadVacancies(companyId: number): void {
    this.vacancyService.getVacanciesListByCompany(companyId).subscribe({
      next: (vacancies) => {
        this.vacancies = vacancies;
      },
      error: (err) => {
        console.error('Error loading vacancies:', err);
      }
    });
  }

}
