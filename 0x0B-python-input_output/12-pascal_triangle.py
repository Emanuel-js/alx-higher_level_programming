#!/usr/bin/python3
""" Module """


def pascal_triangle(n):
    """ Pascal's Triangle """
    pascal = []
    if n > 0:
        temp = []
        for line in range(1, n + 1):
            num = 1
            for i in range(1, line + 1):
                temp.append(num)
                num = int(num * (line - i) / i)
            pascal.append(temp)
            temp = []
    return pascal
