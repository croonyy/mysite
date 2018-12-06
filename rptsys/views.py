# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from rptsys.utils.decorator import login_required
from rptsys.models import RptUser
from django.http import HttpResponse


# Create your views here.


def index(request):
    return render(request, 'rptsys/index.html')


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
    return render(request, 'rptsys/content.html')


def logout(request):
    try:
        del request.session["username"]
    except:
        pass

    return redirect(reverse('rptsyslogin'))



def test(request):
    return render(request, 'rptsys/base.html')
