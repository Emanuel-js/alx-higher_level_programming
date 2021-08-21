#!/bin/bash
# displays the size of the body 
curl -s "$1" | wc -c
