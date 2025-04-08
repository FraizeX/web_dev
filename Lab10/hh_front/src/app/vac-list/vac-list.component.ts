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
    this.companyId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getVacanciesListByCompany();
  }

  getVacanciesListByCompany() {
    this.vacancyService.getVacanciesListByCompany(this.companyId).subscribe((vacancies: Vacancy[]) => {
      this.vacancies = vacancies;
    })
  }

}
