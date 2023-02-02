#! /bin/bash
##
##
MYSQL_USER=''
MYSQL_PASSWORD=''
##
read -p  'User: ' MYSQL_USER
read -p 'Password: ' MYSQL_PASSWORD
##
echo Removing container $(podman stop mysql_db)
sleep 5s
echo Removing container $(podman rm mysql_db)
##
echo "user: ${MYSQL_USER}"
echo "pass: ${MYSQL_PASSWORD}."
echo "...run --> "$(MYSQL_PASSWORD=qaz11qaz && MYSQL_USER=sebaeze && podman run  --name mysql_db -d  -e MYSQL_ROOT_PASSWORD=qaz11qaz  -e MYSQL_USER="$MYSQL_USER" -e MYSQL_PASSWORD="$MYSQL_PASSWORD" -e mysql_db=classicmodels   -p 3306:3306 registry.redhat.io/rhel8/mysql-80)
echo $(podman ps -a | egrep -i 'mysql' )
echo $(sleep 60s)
##
echo Copy data file into container $(podman cp   mysqlsampledatabase.sql mysql_db:/opt/app-root/src/mysqlsampledatabase.sql)
echo Loading data in container $(podman exec -i mysql_db mysql -uroot -P3306  < mysqlsampledatabase.sql)
##