rm -rf .next
pm2 delete nodejs-book
pm2 save
pm2 start pm2.config.json
pm2 save