#!/bin/bash

apt update
apt install curl
status=$(curl https://billowing-wildflower-8404.fly.dev/health)

if [[ $status == "ok" ]]; then
  echo "OK"
  exit 0
else
  echo "Error"
  exit 1
fi


exit 0
