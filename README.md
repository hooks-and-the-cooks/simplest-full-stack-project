# Creating Client-Server-Database Architecture using PERN (TODO WebAPP)
1. This Project Uses PostgresSQL, NodeJS, Express and ReactJS.
2. This Project is to build a TODO List , with features of adding, deleting and updating.

Requirements: Node, PostgresSQL

## Postgres Installation
Repository Cofig:
### sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
Signing Key:
### wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

Installation Command:

### sudo apt-get -y install postgresql

## Postgres Build for Todo WebApp
Entry Point(as user postgres):
### psql -U postgres 
Creating a Database:
### CREATE DATABASE perntodo ;
Create Table Names as todo :
### CREATE TABLE todo( todo_id SERIAL, description VARCHAR(200));
Then Enter the Data using INSERT command!

## Cloning the repostory 
Clone the repository using git commands.

## Setting Up SERVER
Get into the server repository  in shell and run command for all dependencies:
### npm install

## Setting Up CLIENT
Get into the client repository  in shell and run command for all dependencies:
### npm install

## Running the Poject :
Starting server ,get into server in shell and run to start server:
### npm start

Starting client ,get into server in shell and run to start client:
### npm start







