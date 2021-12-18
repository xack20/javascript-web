npm install -g npm

npm install
npm install --prefix client
npm install --prefix server

npm install -g npm-check-updates
ncu -u

cd client
npm install -g npm-check-updates
ncu -u

cd ..
cd server
npm install -g npm-check-updates
ncu -u


cd ..

npm update
npm update --prefix client
npm update --prefix server