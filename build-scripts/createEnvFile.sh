#!/bin/bash
buildConfigEnvironment=$(buildEnvironment)
envFile="./.env.$buildConfigEnvironment"
input="./.env.development"

rm -rf $envFile
touch $envFile

while IFS= read -r line
do
  
  if printf '%s\n' "$line" | grep -q -e '='; then
    varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
    eval valvalue='$'$varname
    # echo "$varname=\"$valvalue"\"
    echo "$varname=\"$valvalue"\" >> $envFile
  fi

done < "$input"