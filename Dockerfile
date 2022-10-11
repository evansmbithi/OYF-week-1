#FROM nginx:latest
#COPY . /usr/share/nginx/html/

#FROM httpd
#COPY . /usr/local/apache2/htdocs/

###### RUN MYSQL IN A DOCKER CONTAINER ######

FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=go-getters

COPY ./db.sql /docker-entrypoint-initdb.d/

# docker build -t mysql-grp7 .
# docker run --name group7 -dp 3307:3306 mysql-grp7
# docker exec -it group7 bash # opens up a bash terminal
# bash-4.0# mysql -u root -p
# password: go-getters
# opens up mysql>
# you can now execute SQL scripts
# mysql> SHOW DATABASES;
# USE db_name;
# SHOW TABLES;
# SELECT * FROM tbl_name;
