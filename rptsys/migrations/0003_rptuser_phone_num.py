# -*- coding: utf-8 -*-
# Generated by Django 1.11.16 on 2018-12-02 09:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rptsys', '0002_rptuser_department'),
    ]

    operations = [
        migrations.AddField(
            model_name='rptuser',
            name='phone_num',
            field=models.CharField(default='15821615670', max_length=11),
        ),
    ]