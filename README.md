#To install dependencies and run the project, please use the following commands:

1. `npm ci` or `npm install`
2. `npm run start:dev`

#For the task, MongoDB is configured with my Atlas account. If you encounter any connection errors, please let me know, or feel free to use your own database.

#api end point's as curl formate

1. curl --location 'http://localhost:3000/auth/register' \
   --header 'Content-Type: application/json' \
   --data-raw '{
   "name": "s",
   "password": "s",
   "email": "sssssss1@gmail.com",
   "mobileNumber": "8868676",
   "county": "1",
   "city": "1",
   "state": "1",
   "gender": "1"
   }'

2. curl --location 'http://localhost:3000/auth/login' \
   --header 'Content-Type: application/json' \
   --data-raw '{
   "email":"sssssss1@gmail.com",
   "password":"s"
   }'

3. curl --location 'http://localhost:3000/task' \
   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N2E2MTVhNWVhZWNjMzhkN2NkYzNjOTciLCJ1c2VybmFtZSI6Im11cmFsaXRoYXJhbjgwNUBnbWFpbC5jb20iLCJpYXQiOjE3Mzg5NDAxNjQsImV4cCI6MTczOTAyNjU2NH0.c\_\_TEyQj9kVvKoo_ekdOJV2yR1QlXJCIedfW8Q-DMwk' \
   --header 'Content-Type: application/json' \
   --data '{
   "name": "s",
   "description": "s",
   "startDate": "07/02/2025",
   "endDate": "07/02/2025",
   "status": "1"
   }'

4. curl --location --request GET 'http://localhost:3000/task' \
   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N2E2MTVhNWVhZWNjMzhkN2NkYzNjOTciLCJ1c2VybmFtZSI6Im11cmFsaXRoYXJhbjgwNUBnbWFpbC5jb20iLCJpYXQiOjE3Mzg5NDAxNjQsImV4cCI6MTczOTAyNjU2NH0.c\_\_TEyQj9kVvKoo_ekdOJV2yR1QlXJCIedfW8Q-DMwk' \
   --header 'Content-Type: application/json' \
   --data '{
   "name": "s",
   "description": "s",
   "startDate": "07/02/2025",
   "endDate": "07/02/2025",
   "status": "1"
   }'

5. curl --location --request GET 'http://localhost:3000/task/67a62e17959bd10c398dcfca' \
   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N2E2MTVhNWVhZWNjMzhkN2NkYzNjOTciLCJ1c2VybmFtZSI6Im11cmFsaXRoYXJhbjgwNUBnbWFpbC5jb20iLCJpYXQiOjE3Mzg5NDAxNjQsImV4cCI6MTczOTAyNjU2NH0.c\_\_TEyQj9kVvKoo_ekdOJV2yR1QlXJCIedfW8Q-DMwk' \
   --header 'Content-Type: application/json' \
   --data '{
   "name": "s",
   "description": "s",
   "startDate": "07/02/2025",
   "endDate": "07/02/2025",
   "status": "1"
   }'

6. curl --location --request PATCH 'http://localhost:3000/task/67a62e17959bd10c398dcfca' \
   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N2E2MTVhNWVhZWNjMzhkN2NkYzNjOTciLCJ1c2VybmFtZSI6Im11cmFsaXRoYXJhbjgwNUBnbWFpbC5jb20iLCJpYXQiOjE3Mzg5NDAxNjQsImV4cCI6MTczOTAyNjU2NH0.c\_\_TEyQj9kVvKoo_ekdOJV2yR1QlXJCIedfW8Q-DMwk' \
   --header 'Content-Type: application/json' \
   --data '{
   "name": "ssss",
   "description": "s",
   "startDate": "07/02/2025",
   "endDate": "07/02/2025",
   "status": "1"
   }'

7. curl --location --request DELETE 'http://localhost:3000/task/67a62e17959bd10c398dcfca' \
   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N2E2MTVhNWVhZWNjMzhkN2NkYzNjOTciLCJ1c2VybmFtZSI6Im11cmFsaXRoYXJhbjgwNUBnbWFpbC5jb20iLCJpYXQiOjE3Mzg5NDAxNjQsImV4cCI6MTczOTAyNjU2NH0.c\_\_TEyQj9kVvKoo_ekdOJV2yR1QlXJCIedfW8Q-DMwk' \
   --header 'Content-Type: application/json' \
   --data '{
   "name": "ssss",
   "description": "s",
   "startDate": "07/02/2025",
   "endDate": "07/02/2025",
   "status": "1"
   }'
