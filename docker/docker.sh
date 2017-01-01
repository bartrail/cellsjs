#!/usr/bin/env bash

containerName="sf_web"

##Update Apache UID
uid=$(id -u)
if [ $uid -gt 100000 ]; then
	uid=1000
fi

sed "s/\$USER_ID/$uid/g" ./apache-php/Dockerfile.dist > ./apache-php/Dockerfile

if [ ! -e ./docker-env ]; then
    cp ./docker-env.dist ./docker-env
fi

##build and launch containers
docker-compose build
docker-compose up -d

##add ssh folder to enable access to private repos
docker cp --follow-link ~/.ssh $containerName:/var/www/
docker exec $containerName chown -R www-data /var/www/.cache /var/www/.composer /var/www/.config /var/www/.local /var/www/.ssh /var/www/.npm

##composer selfupdate
docker exec -it $containerName composer selfupdate

docker exec -it -u www-data $containerName bash
docker-compose stop
docker stop $(docker ps -a -q)
docker rm -v $(docker ps -a -q)

