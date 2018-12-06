# encoding:utf-8

import os


def dir_list(filepath):
    # 遍历filepath下所有文件，包括子目录
    files = os.listdir(filepath)
    f_name=[]
    for fi in files:
        fi_d = os.path.join(filepath, fi)
        if os.path.isdir(fi_d):
            dir_list(fi_d)
        else:
            f_name.append(os.path.join(filepath, fi_d))
    return f_name
