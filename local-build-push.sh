#!/bin/bash

docker build -f docker/dockerfile -t loganlee/front-nia .
docker run -it -d -p 3400:80 --name front-nia loganlee/front-nia