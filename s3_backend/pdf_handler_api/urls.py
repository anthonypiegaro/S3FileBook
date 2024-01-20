from django.urls import path
from .views import DocumentView, UserDocumentsView

urlpatterns = [
    path("documents/", DocumentView.as_view(), name="documents"),
    path("documents/user/", UserDocumentsView.as_view(), name="user-documents"),
]
