#!/usr/bin/python3
""" Module """


def append_write(filename="", text=""):
    """ Append to a file """
    with open(filename, 'a', encoding="utf-8") as f:
        f.write(text)
    f.close()
    return len(text)
