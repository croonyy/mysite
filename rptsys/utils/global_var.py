# encoding:utf-8

# 中间件，每次请求之前都获取下request里面的session，保持登录状态

def get_g_vars(request):
    print '中间件保持登录状态：get session'
    try:
        userid = request.session['userid']
        username = request.session['username']
        user = {"userid": userid, "username": username}
        return user
    except:
        return {'reason': 'Not Logged In'}


