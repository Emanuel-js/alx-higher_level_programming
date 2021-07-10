#!/usr/bin/python3
"""A class MyList that inherits from list"""


class MyList(list):
    """Initialises MyList"""
    def __init__(self):
        pass

    """function that prints sorted list"""
    def print_sorted(self):
        new_list = self[:]
        new_list.sort()
        print(new_list)
