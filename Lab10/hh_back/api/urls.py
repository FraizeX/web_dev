from django.contrib import admin
from django.urls import path
from .views import *


urlpatterns = [
    path('companies/', companies_list),
    path('companies/<int:id>/', company_detail),
    path("companies/<int:id>/vacancies", vacancies_list_by_company),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:id>/', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', top10_vacancies_by_salaryAPIView.as_view()),
]
