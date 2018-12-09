# encoding:utf-8

import os
from mysite.settings import DATA_DIR
from pandas import DataFrame as df


def get_dir(filepath):
    # 遍历filepath下所有文件，包括子目录
    files = os.listdir(filepath)
    f_name = []
    for fi in files:
        fi_d = os.path.join(filepath, fi)
        if os.path.isdir(fi_d):
            get_dir(fi_d)
        else:
            f_name.append(os.path.join(filepath, fi_d))
    return f_name


def get_data():
    dir_list = get_dir(DATA_DIR)
    df_list = []
    for i in dir_list:
        df_list.append(df.from_csv(i, index_col=1))
    # print df_list[0]
    return df_list

