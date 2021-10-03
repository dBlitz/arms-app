# mySatoshi

https://jasonwatmore.com/post/2018/11/28/nodejs-role-based-authorization-tutorial-with-example-api

docker build -t user_microservice .
docker run --rm -P --name pg_test user_microservice



version: '3.1'

services:
  web:
    build: .
    environment:
      NODE_ENV: test
      DB_HOST: user-test-db-public.clxpzptsgx4a.us-east-2.rds.amazonaws.com
      POSTGRES_DB: user_testdb
    ports:
      - "80:80"
    depends_on:
      - "db"
    entrypoint: ["sh", "sequelize-docker.sh"]


