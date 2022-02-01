# Nodejs

The minimal version should be `14.17.x`

```bash
sudo npm install -g n
sudo n stable
node -v
```

# Database

PostgreSQL is the relationnal database that has been choosen for this project.

## Installation

```shell script
# MacOS installation

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew update
brew install postgresql
postgres --version
```

## Create a new user

```shell script
psql postgres

postgres=# CREATE ROLE newUser WITH LOGIN PASSWORD 'password';
postgres=# ALTER ROLE newUser CREATEDB
```

## Create databases

```shell script
psql postgres

postgres=# CREATE DATABASE store;
postgres=# GRANT ALL PRIVILEGES ON DATABASE store TO newUser;
postgres=# CREATE DATABASE storetest;
postgres=# GRANT ALL PRIVILEGES ON DATABASE store TO newUser;
```

## Troubleshoting

If you get an error like `FATAL: database files are incompatible with server`
it is likely that to solve the problem you need to load `brew postgresql-upgrade-database`
and then restart the service using `brew services restart postgres`

# Migrations management

### Development mode

```bash
npm load migrate up|down
```

# Authentication

## Admin

### Using medusa API

email: admin@medusa-test.com
password: password

If you've load the seed, you must update the password as follow

```bash
node
const Scrypt = require('scrypt-kdf')
Scrypt.kdf('password', { logN: 1, r: 1, p: 1 }).then(res => { console.log(res.toString('base64')) })
```

# Troubleshooting

If something already load on port `3000` then load the following command

```bash
kill -9 $(lsof -ti:3000)
```
