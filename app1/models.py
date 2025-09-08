from django.db import models
from django.contrib.auth.models import User

# Category Model (to support product categorization)
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    def __str__(self):
        return self.name

# Product Model (aligned with products.json)
class Product(models.Model):
    id = models.AutoField(primary_key=True)  # Auto-incrementing ID
    name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True, related_name='products')
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Use DecimalField for prices
    description = models.CharField(max_length=255, default="No description")
    icon = models.CharField(max_length=255, default="")
    rating = models.FloatField(null=True, blank=True)
    delivery_time = models.CharField(max_length=50, default="2-3 days")
    badge = models.CharField(max_length=100, null=True, blank=True, default="")
    stock = models.IntegerField(default=100)  # Added to support inventory

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']

# Order Model (for storing order details)
class Order(models.Model):
    STATUS_CHOICES = [
        ("Pending", "Pending"),
        ("Shipped", "Shipped"),
        ("Delivered", "Delivered"),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    full_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    address = models.TextField()
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="Pending")
    subtotal = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    delivery_fee = models.DecimalField(max_digits=10, decimal_places=2, default=25.00)
    total = models.DecimalField(max_digits=10, decimal_places=2, default=25.00)

    def __str__(self):
        return f"Order {self.id} by {self.full_name}"

    class Meta:
        ordering = ['-created_at']

# OrderItem Model (to store multiple products in an order)
class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True, related_name='order_items')
    quantity = models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Snapshot of product price

    def __str__(self):
        return f"{self.quantity} x {self.product.name if self.product else 'Deleted Product'}"