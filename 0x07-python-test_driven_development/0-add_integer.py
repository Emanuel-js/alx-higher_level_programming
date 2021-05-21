#!/usr/bin/python3
"""
Add two integer
"""


def add_integer(a, b=98):
    """
    Add two integers
    Args:
    a: is a one integer
    b: is a two integer, 98 default value
    Return: sum
    """
    if not isinstance(a, (int, float)):
        raise TypeError("a must be an integer")
    elif not isinstance(b, (int, float)):
        raise TypeError("b must be an integer")

    return int(a) + int(b)
