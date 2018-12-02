# encoding:utf-8
from __future__ import unicode_literals
import sys
from django.db import models
# from datetime import datetime
from django.utils import timezone
from django.utils.html import format_html

# 字符报错的时候释放这两句
reload(sys)
sys.setdefaultencoding('utf-8')


# Create your models here.

class RptUser(models.Model):
    class Meta:
        db_table = 'rptuser'

    # user_id = models.IntegerField(primary_key=True, default=1)
    username = models.CharField(max_length=32)
    phone_num = models.CharField(max_length=11, default=r'15821615670')
    password = models.CharField(max_length=32)
    department = models.CharField(max_length=32, default=r'未知')
    role_code = models.IntegerField(blank=True, null=True)
    comment = models.CharField(max_length=200, blank=True, null=True)
    gender = models.BooleanField(default=1)

    def __str__(self):
        return self.username

    def short_comment(self):
        if len(self.comment) > 40:
            short_des = self.comment[0:40]
            return format_html('<span>{}' + '……' + '</span>', short_des)
        else:
            return format_html('<span>{}</span>', self.comment)

    def mod_gender(self):
        if self.gender == True:
            return u'男'
        else:
            return u'女'


class RptDataSource(models.Model):
    class Meta:
        db_table = 'rptdatasource'

    # dataSource_id = models.IntegerField(primary_key=True, default=1)
    # engine=models.CharField(max_length=40)  # 数据库引擎
    username = models.CharField(max_length=40)  # 数据库用户名
    password = models.CharField(max_length=40)  # 密码
    host = models.CharField(max_length=40)  # 主机
    port = models.CharField(max_length=20)  # 数据库使用的端口
    dbname = models.CharField(max_length=40, blank=True, null=True)  # 你要存储数据的库名，事先要创建之
    describe = models.CharField(max_length=100, blank=True, null=True)
    extention_a = models.CharField(max_length=100, blank=True, null=True)
    extention_b = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.host


class RptQuery(models.Model):
    class Meta:
        db_table = 'rptquery'

    # query_id = models.IntegerField(primary_key=True, default=1)
    query_name = models.CharField(max_length=40, unique=True, blank=False)
    author = models.CharField(max_length=40)
    department = models.CharField(max_length=40, blank=True, null=True)
    query_code = models.TextField()
    comment = models.TextField(blank=True, null=True)
    userid = models.ForeignKey('RptUser')
    create_time = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.query_name

    # 代码简略显示40个字符
    def short_code(self):
        if len(self.query_code) > 40:
            short_des = self.query_code[0:40]
            return format_html('<span>{}' + '……' + '</span>', short_des)
        else:
            return format_html('<span>{}</span>', self.query_code)

    def short_comment(self):
        if len(self.comment) > 40:
            short_des = self.comment[0:40]
            return format_html('<span>{}' + '……' + '</span>', short_des)
        else:
            return format_html('<span>{}</span>', self.comment)


# 注册模型到admin
from django.contrib import admin


@admin.register(RptUser)
class RptUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'phone_num', 'department')


@admin.register(RptQuery)
class RptQueryAdmin(admin.ModelAdmin):
    list_display = ('query_name', 'author')
