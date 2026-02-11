! this is node express practice project 

npx sequelize model:generate --name User --attributes name:string,email:string,password:string


--- this is for table create - npx sequelize  db : migration 

migrations cmd -- npx sequelize-cli migration:generate --name create-user-registration

migration create table -- npx sequelize-cli db:migrate
undo migration last  - npx sequelize-cli db:migrate:undo
create model --  npx sequelize-cli model:generate --name userRegistrations.model
 


install things 
        * body parser 