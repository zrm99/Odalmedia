# Odalmedia
Odalmedia is an open-source NodeJS based text only forum software using PostgreSQL, programmed in mind to have little moderation. 

<h3>
History/About:
</h3>

This project started on a whim and it is my first attempt at NodeJS although I have had limited experience with native Javascript in the past.
I do not use a standard naming convention for my variables or CSS classes and IDs which may be confusing if you view my code. I did not use a frontend framework for this project athough I did think about rewriting it with a frontend framework in mind, I decided to use CSS grid as I have experimented with it in the past in a limited manner. 

I have never attempted SQL programming before, and before switching to PostgreSQL, 
I had created basic authetication with a register/login page with MongoDB and Mongoose. 
After contemplating for a while I decided to migrate databases and attempt PostgreSQL. 


The way the current website is structured is that once you register for a profile, you have access to a custom psuedo-anonymous profile 
that allows you to post in the public domain, located by pressing the "browser" button.
The browser is where "miniverses" are located. Miniverses are areas of discussion where users make topics that congregate around what that 
miniverse's name is about.

Any user can create a miniverse with the "create miniverse" button located in the browser. All miniverses names are unique and
any user that makes a miniverse owns that miniverse. Miniverse owners cannot be 
removed from owning a miniverse currently, though I have thought of some ideas on how to do that. 
The owner of the miniverse can choose to delete their miniverse at any time, which deletes every post and topic from 
anyone who posted on there, and then the miniverse can be claimed by whoever recreates it.

<h3>
Required tools:
</h3>

Pgadmin https://www.pgadmin.org/download/
<br>
NodeJS https://nodejs.org/en/

<h3>
Installation Instructions:
</h3>

1) Have the required tools installed.
2) Download the main Nodejs directory.  
3) Run pgadmin and set up a user and password and create a database.
4) Follow these instructions by importing the file titled "initial.sql": 
https://www.postgresql-archive.org/pgAdmin-4-How-to-I-import-a-sql-file-td5999352.html
5) Start up the Node.js command prompt and navigate to the inside of the /Nodejs/ directory.
6) Run NPM install which will install the required dependencies for the program.
7) Enter "node odal.js" into the Node.js command prompt after the dependencies are installed 
and you should see an API prompt displaying "Database name:".
8) Submit the database name and answer the next prompts of "Database owner:" and "Database password:".
These prompts will be asked every time the server is restarted.

If all is successful two messages should appear, the first displays "SERVING RUNNING AT: localhost:8080", 
and the next message says "DATABASE CONNECTED". If the messages mentioned do not show up, and you see a large list of errors, you weant wrong somewhere 
and the credentials or information entered is wrong.



