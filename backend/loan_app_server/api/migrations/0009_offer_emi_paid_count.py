# Generated by Django 4.0.4 on 2022-05-10 10:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_bill_is_recent_bill_reciever_bill_sender'),
    ]

    operations = [
        migrations.AddField(
            model_name='offer',
            name='emi_paid_count',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
