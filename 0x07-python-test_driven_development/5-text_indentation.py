#!/usr/bin/python3
""" prints a text with 2 new lines """


def text_indentation(text):
    """
    prints a text with 2 new lines after each of these characters: ., ? and :
    Arg: text
    """
    if not isinstance(text, str):
        raise TypeError("text must be a string")

    new_text = ""
    for i in text:
        if i == '\n':
            print("{}".format(new_text))
            new_text = ""
            continue
        else:
            new_text += i

        if i == '.' or i == '?' or i == ':':
            new_text = new_text.strip(" ")
            print("{}".format(new_text), end="")
            print("\n")
            new_text = ""

    new_text = new_text.strip(" ")
    print("{}".format(new_text), end="")
