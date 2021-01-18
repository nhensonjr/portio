#!/usr/bin/env bash

docker stop portio
docker rm portio

docker run \
    -e 'ACCEPT_EULA=Y' \
    -e 'POSTGRES_PASSWORD=Ls3N8mXCtvYCyv' \
    -e 'POSTGRES_DB=portio' \
    -p 5432:5432 \
    --name portio \
    -d \
    --restart unless-stopped \
    postgres

sleep 15
docker cp portio-setup.sql portio:/portio-setup.sql
sleep 15
winpty docker exec -it portio sh -c "psql -h localhost -U postgres -f portio-setup.sql"
