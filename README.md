# nodejs-graphql
nodejs with graphql


## Deploy MySQL locally using Podman

```
sh -v ./database/mysql.sh
```
or
```
##
podman run -d --name mysql_db -e MYSQL_ROOT_PASSWORD=$MYSQL_PASSWORD  -e MYSQL_USER=$MYSQL_USER -e MYSQL_PASSWORD=$MYSQL_PASSWORD -e mysql_db=classicmodels -p 3306:3306 registry.redhat.io/rhel8/mysql-80
##
podman cp   mysqlsampledatabase.sql mysql_db:/opt/app-root/src/mysqlsampledatabase.sql
podman exec -i mysql_db mysql -h127.0.0.1 -uroot -p$MYSQL_PASSWORD < mysqlsampledatabase.sql
##
```