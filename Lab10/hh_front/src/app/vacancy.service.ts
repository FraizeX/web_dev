import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vacancy} from './models';

@Injectable({
  providedIn: 'root'
})

export class VacancyService {
  BASE_URL = 'http://localhost:8080';

  constructor(private client: HttpClient) { }

  getVacanciesListByCompany(companyId: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${companyId}/vacancies/`);
  }
}
