#!/bin/bash

docker build -t local-emailer `dirname "$0"`
docker run --rm -p 4200:4200 local-emailer
