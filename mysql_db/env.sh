#! /bin/bash
#
#  Set up environment variables for MYSQL on runtime
#
export $(grep -v '^#' /opt/app-root/src/env.source | xargs)
sleep 3s
printenv
#cat ./variables.source
#source ./variables.source
#
#     mysql_db=$mysql_db \
#     && SERVICE_NAME=$SERVICE_NAME \
#     && MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD \
#     && MYSQL_USER=$MYSQL_USER \
#     && MYSQL_PASSWORD=$MYSQL_PASSWORD \
#     && MYSQL_DB_NAME=$MYSQL_DB_NAME \
#     && echo '...MYSQL_USER: '$MYSQL_USER'.'
#