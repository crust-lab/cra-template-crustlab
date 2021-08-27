#!/bin/sh

set -e


FILE="/app/env.js"

if [ ! -z $API_URL ] && [ -e "$FILE" ]; then
    sed -i "s~ENV_API_URL~$API_URL~g" $FILE
else
    echo >&3 "API_URL environment variable missing or $FILE does not exist"
    exit 1
fi
