#!/bin/bash

#set -x // Debug mode

export PATH="$HOME/.nvm/versions/node/v16.20.0/bin/npm:$PATH"
source "$HOME/.nvm/nvm.sh"
# tá funcionando

npm install serve
serve -s /var/www/html/