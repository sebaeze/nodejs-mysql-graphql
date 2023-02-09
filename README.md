# nodejs-mysql-graphql

Expose data from MySQL through GraphQL

## Deploy MySQL locally using Podman

```bash
##
cd mysql_db && source ../.env
##
echo 'MYSQL_PASSWORD: '$MYSQL_PASSWORD' MYSQL_USER_NO_ROOT: '$MYSQL_USER_NO_ROOT' MYSQL_DB_NAME: '$MYSQL_DB_NAME';'
##
podman run -d --name mysql_db -e MYSQL_ROOT_PASSWORD=$MYSQL_PASSWORD  -e MYSQL_USER=$MYSQL_USER_NO_ROOT -e MYSQL_PASSWORD=$MYSQL_PASSWORD -e mysql_db=$MYSQL_DB_NAME -e MYSQL_DB_NAME=$MYSQL_DB_NAME  -p 3306:3306 registry.redhat.io/rhel8/mysql-80 && podman logs -f mysql_db
##
podman cp   mysqlsampledatabase.sql mysql_db:/opt/app-root/src/uploaded_data.sql && podman exec -i mysql_db sed -i "s/classicmodels/${MYSQL_DB_NAME}/g" /opt/app-root/src/uploaded_data.sql && podman exec -i mysql_db sh -c "exec mysql -h127.0.0.1 -uroot -p${MYSQL_PASSWORD} < uploaded_data.sql"
##podman exec -i mysql_db mysql -h127.0.0.1 -uroot -p${MYSQL_PASSWORD} < uploaded_data.sql
##
```

## Configuration

Create .env locally in the root folder and config using the following template ==>

```
##
MYSQL_DB_URL=127.0.0.1
MYSQL_DB_PORT=3306
MYSQL_DB_NAME=__SCHEMA__
##
MYSQL_USER=___MYSQL_USER___
MYSQL_PASSWORD=___MYSQL_PASSWORD___
##
```