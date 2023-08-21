from rest_framework import serializers
from marks.models import employeetable1, loantable1

'''
class TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = mytable3
        fields = '__all__'''''


class employeetable1Serializer(serializers.ModelSerializer):
    class Meta:
        model = employeetable1
        fields = '__all__'


class loantable1Serializer(serializers.ModelSerializer):
    customer_name = serializers.SlugRelatedField(
        queryset=employeetable1.objects.all(),
        slug_field='customer_name')
    employee_table = serializers.SlugRelatedField(queryset=employeetable1.objects.all(), slug_field='customer_pan')
    creation_date = serializers.DateTimeField(format="%H:%M:%S, %d-%m-%Y")
    update_date = serializers.DateTimeField(format="%H:%M:%S, %d-%m-%Y")

    class Meta:
        model = loantable1
        fields = ['loan_id', 'loan_amount', 'employee_table', 'customer_name', 'relationship_manager', 'creation_date',
                  'update_date']
