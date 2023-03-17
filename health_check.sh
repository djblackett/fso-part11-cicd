#!/bin/bash

status=$(curl -s https://billowing-wildflower-8404.fly.dev/health)

if [[ $status == "ok" ]]; then
  echo "OK"
  exit 0
else
  echo "Error"
  exit 1
fi

exit 0
