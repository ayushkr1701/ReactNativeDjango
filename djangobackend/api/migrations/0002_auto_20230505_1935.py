# Generated by Django 3.2.9 on 2023-05-05 14:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('taskname', models.CharField(max_length=100)),
                ('deadline', models.CharField(max_length=100)),
            ],
        ),
        migrations.DeleteModel(
            name='Student',
        ),
    ]
