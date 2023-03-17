#!/bin/bash

echo "Hello from shell script"
apt update
apt install curl
status=$(curl https://billowing-wildflower-8404.fly.dev/health)

if [[ $status == "ok" ]]; then
  echo "all good"
  exit 0
else
  echo "error"
  exit 1
fi
