CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (id int auto_increment primary key, username varchar(50), room varchar (50), message varchar(1000) not null
  /* Describe your table here.*/
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

