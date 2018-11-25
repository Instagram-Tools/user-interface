#!/bin/sh

echo "setting nginx conf ..."
echo "DEBUG": $DEBUG
echo "APP_DIR": $APP_DIR
echo "APP_PATH_PREFIX": $APP_PATH_PREFIX
echo "APP_API_PLACEHOLDER": $APP_API_PLACEHOLDER
echo "APP_API_GATEWAY": $APP_API_GATEWAY
echo "APP_BOT_PLACEHOLDER": $APP_BOT_PLACEHOLDER
echo "APP_BOT_GATEWAY": $APP_BOT_GATEWAY
echo "PAYMENT_PLACEHOLDER": $PAYMENT_PLACEHOLDER
echo "PAYMENT_GATEWAY": $PAYMENT_GATEWAY
echo "CLIENT_BODY_TIMEOUT": $CLIENT_BODY_TIMEOUT
echo "CLIENT_HEADER_TIMEOUT": $CLIENT_HEADER_TIMEOUT
echo "CLIENT_MAX_BODY_SIZE": $CLIENT_MAX_BODY_SIZE

# replace env for nginx conf
envsubst '$WHITE_LIST $WHITE_LIST_IP $DEBUG $APP_DIR $APP_PATH_PREFIX $APP_API_PLACEHOLDER $APP_API_GATEWAY $APP_BOT_PLACEHOLDER $APP_BOT_GATEWAY $PAYMENT_PLACEHOLDER $PAYMENT_GATEWAY $CLIENT_BODY_TIMEOUT $CLIENT_HEADER_TIMEOUT $CLIENT_MAX_BODY_SIZE' < /etc/nginx/conf.d/app.conf.template > /etc/nginx/conf.d/default.conf

# find all env start with APP_
export SUBS=$(echo $(env | cut -d= -f1 | grep "^APP_" | sed -e 's/^/\$/'))

# replace above envs
echo "inject environments ..."
echo $SUBS
for f in `find /usr/share/nginx/html -regex ".*\.\(js\|css\|html\|json\|map\)"`; do envsubst "$SUBS" < $f > $f.tmp; mv $f.tmp $f; done

# start nginx
nginx -g 'daemon off;'
exec "$@"
