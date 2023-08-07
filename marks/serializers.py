from rest_framework import serializers
from marks.models import mytable3


class TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = mytable3
        fields = '__all__'
