#!/bin/sh

 docker rmi -f $(docker images -a -q)

 docker container rm $(docker ps -a -q) —