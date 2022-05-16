# brokers_management

- Install Nodemon, Sequelize CLI and Typescript Globally in your machine.
    - npm i -g nodemon 
    - npm i -g typescript
    - npm i -g sequelize-cli

- Set environment variables in .env file

- Start Project:- npm start 


# MIGRATION PROCESS

    - Install sequelize cli
        command:- npm i -g sequelize-cli

    - Create Migration Files
        command:- npm sequelize-cli init

    - Create db if not exists
        command:- sequelize-cli db:create

    - Create Model
        command:- npx sequelize-cli model:generate --name [Model-name] --attributes column1:type,column2:type,etc

    - Change model structure
        command:- npx sequelize-cli migration:create --name [filename]

    - Migration Runnpx sequelize db:seed:all
        command:- npx sequelize-cli db:migrate

    - Create Seeders
        command:- npx sequelize seed:generate --name [file-name]

    - Run ALL Seeders
        command:- npx sequelize db:seed:all

    - Run Specific Seeder
        command:- npx sequelize db:seed --seed file_name.js
