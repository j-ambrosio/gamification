#!/bin/bash

echo "=> Creating an ${MONGO_INITDB_DATABASE} user with a password in MongoDB"
    mongo admin -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD << EOF
use $MONGO_INITDB_DATABASE
db.createUser({user: '$DB_APPLICATION_USER', pwd: '$DB_APPLICATION_PASS', roles:[{role:'dbOwner', db:'$MONGO_INITDB_DATABASE'}]})
EOF

echo "=> Done!"