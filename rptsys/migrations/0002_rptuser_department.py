# -*- coding: utf-8 -*-
# Generated by Django 1.11.16 on 2018-12-02 09:04
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rptsys', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='rptuser',
            name='department',
            field=models.CharField(default='\u672a\u77e5', max_length=32),
        ),
    ]
