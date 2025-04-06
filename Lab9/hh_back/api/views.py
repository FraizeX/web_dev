from django.http import JsonResponse
from django.shortcuts import render
from .models import Company, Vacancy

def companies_list(request):
    companies = Company.objects.all()
    result = []
    for company in companies:
        result.append(company.to_json())
    return JsonResponse(result,safe=False)

def companies_detail(request, id):
    company = Company.objects.get(id=id)
    return JsonResponse(company.to_json())

def vacancies_list_by_company(request, id):
    vacancies = Vacancy.objects.filter(company=id)
    result = []
    for vacancy in vacancies:
        result.append(vacancy.to_json())
    return JsonResponse(result,safe=False)

def list_vacancies(request):
    vacancies = Vacancy.objects.all()
    result = []
    for vacancy in vacancies:
        result.append(vacancy.to_json())
    return JsonResponse(result,safe=False)

def vacancies_detail(request, id):
    vacancy = Vacancy.objects.get(id=id)
    return JsonResponse(vacancy.to_json())

def top10_vacancies_by_salary(request):
    vacancies = Vacancy.objects.order_by("-salary")[:10]
    result = []
    for vacancy in vacancies:
        result.append(vacancy.to_json())
    return JsonResponse(result,safe=False)

