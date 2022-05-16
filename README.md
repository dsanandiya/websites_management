# websites_management

- Install Sequelize CLI Globally in your machine.
    - npm i -g sequelize-cli

- Set environment variables in .env file

- Start Project: npm start 


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

FINAL OUTPUT

Graph:
<img width="1259" alt="Screenshot 2022-05-16 at 9 36 10 PM" src="https://user-images.githubusercontent.com/998852/168636481-2eb98983-c382-450c-ad57-7c4ba08c3cc7.png">

Data Table:
<img width="1183" alt="Screenshot 2022-05-16 at 9 36 21 PM" src="https://user-images.githubusercontent.com/998852/168636545-598e728a-36c6-4c14-9cce-773c21c40344.png">
