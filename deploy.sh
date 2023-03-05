git pull
rm -rf .next
pm2 delete nodejs-book
pm2 save
yarn build
pm2 start pm2.config.json
pm2 save