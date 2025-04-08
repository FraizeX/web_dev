import {Component, OnInit } from '@angular/core';
import {Company} from '../models';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CompanyService} from '../company.service';

@Component({
  selector: 'app-comp-list',
  imports: [CommonModule],
  templateUrl: './comp-list.component.html',
  styleUrl: './comp-list.component.css'
})
export class CompListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getCompanies().subscribe((companies: Company[]) => {
      this.companies = companies;
    })
  }

  viewVacancies(companies: Company[]): void {
    this.router.navigate(['/vacancies/']);
  }

}
