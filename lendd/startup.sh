#!/usr/bin/env bash

echo "setting nginx conf ..."
echo "PROVIDER": $PROVIDER
echo "LEXICON_CLOUDFLARE_USERNAME": $LEXICON_CLOUDFLARE_USERNAME
echo "LEXICON_CLOUDFLARE_TOKEN": $LEXICON_CLOUDFLARE_TOKEN
echo "UI_SERVER_NAME": $UI_SERVER_NAME
echo "MAILTO": $MAILTO

# replace env for nginx conf
envsubst '$UI_SERVER_NAME' < /etc/nginx/conf.d/app.conf.template > /etc/nginx/conf.d/default.conf
envsubst '$MAILTO' < /etc/dehydrated/config.tmp > /etc/dehydrated/config


echo $UI_SERVER_NAME > /etc/dehydrated/domains.txt

# Required to set environment. Dehydrated has issues otherwise.
env > /etc/environment

# Make sure we already registered with Let's Encrypt via dehydrated client
/app/dehydrated/dehydrated --register --accept-terms

# Start cron
cron

# Start nginx. Start with daemon off so the docker container keeps running.
# If this is not done, the container will immediately shutdown since Docker
# requires a process to be running in the foreground.
nginx -g 'daemon off;' "$@"