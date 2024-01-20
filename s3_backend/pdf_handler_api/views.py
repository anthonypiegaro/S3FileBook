from rest_framework import status
from rest_framework.parsers import MultiPartParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Document
from .serializers import DocumentSerializer

class DocumentView(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser]

    def post(self, request):
        name = request.data["name"]
        date = request.data["date"]
        file = request.data["file"]
        user = request.user.id
        data = {"user": user, "name": name, "date": date, "pdf_file": file}
        serializer = DocumentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, file_name):
        pass

class UserDocumentsView(APIView):
    def get(self, request):
        documents = Document.objects.filter(user=request.user)
        serializer = DocumentSerializer(instance=documents, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)