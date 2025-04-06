from django.contrib import admin
from django.urls import path
from .views import *


urlpatterns = [
    path('companies/', companies_list),
    path("companies/<int:id>", companies_detail),
    path("companies/<int:id>/vacancies", vacancies_list_by_company),
    path("vacancies/", list_vacancies),
    path("vacancies/<int:id>", vacancies_detail),
    path("vacancies/top_ten/", top10_vacancies_by_salary)

]
