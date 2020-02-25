#!/bin/bash
buildConfigEnvironment=$1
envFile="./.env.$1"
input="./.env.development"

rm -rf $envFile
touch $envFile

while IFS= read -r line
do
  
  if printf '%s\n' "$line" | grep -q -e '='; then
    varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
    echo "$varname=\"%$varname%"\" >> $envFile
  fi

done < "$input"