from django.contrib.auth import get_user_model
from django.db import models

class Document(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    name = models.CharField(max_length=100, unique=True)
    date = models.DateField()
    pdf_file = models.FileField(upload_to="pdfs/")

    def __str__(self):
        return self.name