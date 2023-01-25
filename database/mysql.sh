#! /bin/bash
##
##
MYSQL_PASSWORD=____
MYSQL_USER=__
##
echo Removing container $(podman rm mysql_db)
##
echo "user: ${MYSQL_USER}" 
echo "pass: ${MYSQL_PASSWORD}."
MYSQL_PASSWORD=qaz11qaz && MYSQL_USER=sebaeze && podman run -d --name mysql_db -e MYSQL_ROOT_PASSWORD=$MYSQL_PASSWORD  -e MYSQL_USER=$MYSQL_USER -e MYSQL_PASSWORD=$MYSQL_PASSWORD -e mysql_db=classicmodels -p 3306:3306 registry.redhat.io/rhel8/mysql-80
echo $(podman ps -a | egrep -i 'mysql' )
sleep 4s 
##
echo Copy data file into container $(podman cp   mysqlsampledatabase.sql mysql_db:/opt/app-root/src/mysqlsampledatabase.sql)
echo Loading data in container $(podman exec -i mysql_db mysql -h127.0.0.1 -uroot -pqaz11qaz < mysqlsampledatabase.sql)
##