# Generated by Django 4.0.4 on 2022-05-09 16:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_offer_offered_by'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='rate',
            field=models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=5, null=True),
        ),
    ]
