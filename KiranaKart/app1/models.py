from django.db import models

# Create your models here.
# class Product(models.Model):
#     name = models.CharField(max_length=100)
#     price = models.DecimalField(max_digits=8, decimal_places=2)
#     image = models.ImageField(upload_to="products/")
class Product(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=50)
    price = models.FloatField()
    description = models.TextField()
    icon = models.URLField()
    rating = models.FloatField()
    deliveryTime = models.CharField(max_length=50)
    badge = models.CharField(max_length=50)