How to run unit test

Install Jest for TypeScript:

npm install --save-dev jest ts-jest @types/jest

Initialize Jest config:

npx ts-jest config:init

Then run the tests:

npm test

How to set up run code

Install package

npm i -D typescript ts-node nodemon tsconfig-paths

Add the following to your package.json under the scripts section to configure Nodemon.

 "scripts": {
    "dev": "nodemon src/app.ts"
    }
    
command : npm run dev
