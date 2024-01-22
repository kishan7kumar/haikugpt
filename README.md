# haikugpt
A small web app that allows users to get feedback on haikus with AI. The user should be able to go to the site, enter a haiku, and see a critique response from a large language model. If and only if the user does not submit a haiku, respond with an LLM generated haiku instead.


# HaikuGPT app backend

### `Starting the server`

"npm run dev" will run the server 

### `Backend Tech Stack`

* Node.js: Used for creating the backend server
* Express.js: Web application framework used for setting up middleware & adding functionality
* SQLite: A NoSQL Document database used for storing chats & users information 
* Http-errors : Used for creating/handling error messages
* Socket.io: Used for real-time client-server communication
* Morgan: Used for logging http requests
* Cors: Used for supporting CORS
* Typescript: Open-source language building on JavaScript by adding static type definitions



# HaikuGPT app frontend

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
