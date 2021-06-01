#!/usr/bin/python3
""" Module """


def read_file(filename=""):
    """ Read a file """
    with open(filename, encoding="utf-8") as f:
        line = f.read()
    print(line, end="")
    f.close()
