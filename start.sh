#!/bin/bash

docker build -t local-emailer .
docker run -it --rm -p 4200:4200 local-emailer