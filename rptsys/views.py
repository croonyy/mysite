# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from rptsys.utils.decorator import login_required
from rptsys.models import RptUser
from django.http import HttpResponse

import math
from django.template import loader
from pyecharts import Line3D, Line, Bar
from utils.tools import get_data

REMOTE_HOST = "https://pyecharts.github.io/assets/js"


# Create your views here.


# def index(request):
#     return render(request, 'rptsys/index.html')


def login(request):
    if request.method == "GET":
        return render(request, 'rptsys/login.html')
    else:
        uname = request.POST['username']
        pwd = request.POST.get('password')
        # remember = request.POST.get('remember')
        print uname + ':' + pwd
        # return render(request, 'rptsys/login.html')

        try:
            user = RptUser.objects.get(username=uname, password=pwd)
        except:
            wrong = 1
            return render(request, 'rptsys/login.html', {'wrong': wrong})
        if user:
            request.session['userid'] = user.pk
            request.session['username'] = uname
            print request.session['username']
            return redirect(reverse('rptsyscontent'))
            # return render(request,'rptsys/content.html')
        else:
            # 用来在登录页面显示登录失败
            wrong = 1
            return render(request, 'rptsys/login.html', {'wrong': wrong})


@login_required
def content(request):
    # template = loader.get_template('echarts/test.html')
    df_list = get_data()
    # print df_list[0]
    # print type(df_list[0])
    # print (type(df_list[0].iloc[:, 0]))
    # print (type(df_list[0].icol(0)))
    # print (df_list[0]['日期'])
    # print (type(df_list[0].iloc(1)))

    line_d = Bar()
    line_d.add(r'line chart', df_list[0].iloc[:, 0], [15,14,17,12,12])
    context = dict(
        myechart=line_d.render_embed(),
        host=REMOTE_HOST,
        script_list=line_d.get_js_dependencies()
    )
    return render(request, 'rptsys/content.html', context)
    # return render(request, 'rptsys/content.html')


def logout(request):
    try:
        del request.session["username"]
    except Exception, e:
        print e

    return redirect(reverse('rptsyslogin'))


def test(request):
    return render(request, 'rptsys/base.html')


# echarts test

def line3d():
    _data = []
    for t in range(0, 25):
        _t = t / 10
        x = (1 + 0.25 * math.cos(75 * _t)) * math.cos(_t)
        y = (1 + 0.25 * math.cos(75 * _t)) * math.sin(_t)
        z = _t + 2.0 * math.sin(75 * _t)
        _data.append([x, y, z])
    range_color = [
        '#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf',
        '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
    line3d = Line3D("3D line plot demo", width=600, height=300)
    line3d.add("", _data, is_visualmap=True,
               visual_range_color=range_color, visual_range=[0, 30],
               is_grid3D_rotate=True, grid3D_rotate_speed=180)
    return line3d


def index(request):
    # template = loader.get_template('echarts/test.html')
    l3d = line3d()
    context = dict(
        myechart=l3d.render_embed(),
        host=REMOTE_HOST,
        script_list=l3d.get_js_dependencies()
    )
    # return HttpResponse(template.render(context, request))
    return render(request, 'echarts/test.html', context)
