#!/usr/bin/python3
for i in range(ord('a'), ord('z')+1):
    if i in [101, 113]:
        continue
    print("{:c}".format(i), end="")
