#!/bin/bash
# displays the size of the body 
# of a get requests using curl

curl -s "$1" | wc -c
