# Carbonated

#### Carbonated is a clone of untappd where you can post you favorite soda flavors and combinations.

## Live link
https://solo-react-project1.herokuapp.com/

## Tech stack 
Html, Css, React, Redux, Node.js, Express, Sequelize, PostgreSQL

## Getting started

1. Clone this repository ```https://github.com/awadams198/Carbonated.git```

git clone 

2. CD into the backend directory and install dependencies

```npm install```

3. CD into the frontend directory and install dependencies

```npm install```

4. Create a .env file based on the .env.example given

5. Create a user in psql based on your .env DB_USERNAME

```psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"```

6. Create the database, migrate, and seed

```npx dotenv sequelize db:create```

```npx dotenv sequelize db:migrate```

```npx dotenv sequelize db:seed:all```

7. Open up two terminals and cd into the backend and frontend directories, respectively. Start the server in each by running:

```npm start```

## Screenshot
Homepage
![image](https://user-images.githubusercontent.com/86488501/162500386-dfba046d-589c-4db3-945d-3cbfe58283fa.png)


## For more information 
https://github.com/awadams198/solo-react-project/wiki

