from django.db import models


class mytable3(models.Model):
    id = models.IntegerField(primary_key=True)
    std_rollno = models.CharField(db_column='Std_RollNo', max_length=6)  # Field name made lowercase.
    std_name = models.CharField(db_column='Std_Name', max_length=22)  # Field name made lowercase.
    std_branch = models.CharField(db_column='Std_Branch', max_length=14, blank=True, null=True)  # Field name made lowercase.
    std_course = models.CharField(db_column='Std_Course', max_length=15)  # Field name made lowercase.
    std_studyhours = models.DecimalField(db_column='Std_StudyHours', max_digits=4, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    std_marks = models.DecimalField(db_column='Std_Marks', max_digits=5, decimal_places=2)  # Field name made lowercase.

    class Meta:
        db_table = 'mytable3'

        def __str__(self):
            return self.mytable








