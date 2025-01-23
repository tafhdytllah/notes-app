### HOW TO DB MIGRATE

- npm run migrate create "create table notes" //akan membuat file migrasi pada folder migrations
- npm run migrate create "create table users"
- npm run migrate create "create table authentications"
- npm run migrate create "add column owner to table notes"
- npm run migrate up // akan membuat table pada db psql
- random string : require('crypto').randomBytes(64).toString('hex');
