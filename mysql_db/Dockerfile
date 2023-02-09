FROM registry.redhat.io/rhel8/mysql-80
#
ENV  mysql_db SERVICE_NAME SERVICE_PORT MYSQL_ROOT_PASSWORD MYSQL_USER MYSQL_PASSWORD MYSQL_DB_NAME
##
ADD  env.sh .
ADD  env.source .
#
RUN    pwd \
    && export $(grep -v '^#' /opt/app-root/src/env.source | xargs) \
    && printenv \
    && ls -lt | head
#
EXPOSE  3306
#
ENTRYPOINT ["/opt/app-root/src/env.sh","container-entrypoint"]
CMD ["run-mysqld"]
##
