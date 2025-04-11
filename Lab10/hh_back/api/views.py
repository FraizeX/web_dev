from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.decorators import api_view
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from django.views.decorators.csrf import csrf_exempt
import json

#fbv-s
@csrf_exempt
def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

def company_detail(request, id):
    company = get_object_or_404(Company, id=id)
    return JsonResponse(company.to_json())

def vacancies_list_by_company(request, id):
    vacancies_by_company = Vacancy.objects.filter(company__id=id)
    return JsonResponse([v.to_json() for v in vacancies_by_company], safe=False)



#cbv-s
class VacancyListAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VacancyDetailAPIView(APIView):
    def get(self, request, id):
        vacancy = Vacancy.objects.get(pk=id)
        if isinstance(vacancy, Vacancy):
            return vacancy
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, id):
        vacancy = Vacancy.objects.get(pk=id)
        if isinstance(vacancy, Vacancy):
            return vacancy
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        vacancy = Vacancy.objects.get(pk=id)
        if isinstance(vacancy, Vacancy):
            return vacancy
        vacancy.delete()
        return Response({'message': 'Vacancy deleted'})

class top10_vacancies_by_salaryAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
