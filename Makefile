setup:
	cd client && npm install && cd .. && cd server && npm install && cd ..

run-migrations:
	cd server && DATABASE_URL=postgres://postgres:postgres@localhost:5432/perntodo npm run migrate up

start-server:
	cd server && npm start

start-client:
	cd client && npm start