from django.db import models


class employeetable1(models.Model):
    customer_id = models.IntegerField(db_column='customer_id', primary_key=True)
    customer_pan = models.CharField(db_column='customer_pan', max_length=10)
    customer_name = models.CharField(db_column='customer_name', max_length=22)
    customer_phone = models.CharField(db_column='customer_phone', max_length=12)

    class Meta:
        db_table = 'subbackend_employeetable'



class loantable1(models.Model):
    loan_id = models.IntegerField(db_column='loan_id', primary_key=True)
    loan_amount = models.IntegerField(db_column='loan_amount')
    employee_table = models.ForeignKey(employeetable1, on_delete=models.CASCADE)
    customer_name = models.ForeignKey(employeetable1, on_delete=models.CASCADE, related_name='name')
    relationship_manager = models.CharField(db_column='relationship_manager', max_length=100)
    creation_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'subbackend_loantable'

