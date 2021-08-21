#!/bin/bash
# displays the size of the body 
# of a get requests using curl

curl -Is "$1" |grep "Content-Length:"| cut -d' ' -f2
