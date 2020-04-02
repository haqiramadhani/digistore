# Documentation
## Backend
Open [Backend Documentation](/backend/README.md) to view it.

## Frontend
Open [Frontend Documentation](/frontend/README.md) to view it.

# HOW TO RUN ON SERVER
- Clone this Repository
- Install the Package
```
cd frontend && yarn install && cd ..
cd backend && yarn install && cd ..
```
- Build Frontend
```
cd frontend && yarn build && cd ..
```
- Copy and Replace All File
from `frontend/build` to `backend/public`.

```
# For LINUX OR MAC
cp frontend/build backend/public

# For WINDOWS
copy frontend\build backend\public
```
- Install `forever` globally
```
npm install forever -g
or 
yarn add forever --global
```
- Run  the Backend Server
```
forever start backend/index.js
```