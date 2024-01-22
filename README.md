# HaikuGPT

A small web app that allows users to get feedback on haikus with AI. The user should be able to go to the site, enter a haiku, and see a critique response from a large language model. If and only if the user does not submit a haiku, respond with an LLM generated haiku instead.

# HaikuGPT Server

`server/` contains backend code, that handles REST API based communication between frontend and backend. Backend file structure are organized in the style of monolithic MVC architecture. Default port for server: 9000

### `Starting the Server`

To run the server, navigate to server/ directory

if running for the first time, install dependencies and add your OpenAI API key to .env file

```bash
npm install
```

and then to start the server

```bash
npm run dev
```

server will start on port 9000

### `Backend Tech Stack`

- Node: Used for creating the backend server, provides hihg scalability and performance
- Express: Web application framework used for setting up middleware & adding functionality
- SQLite DB: A RDBMS database used here for storing user queries
- Http-errors : Used for creating/handling error messages
- Morgan: Used for logging http requests
- OpenAI: OpenAI api service used for generating haikus
- Cors: Used for supporting CORS
- Typescript: Open-source language building on JavaScript by adding static type definitions

# HaikuGPT Client

`client/` contains frontend code. It is a monolithic React application.

### `Starting the client`

To run the client, navigate to client/ directory

if running for the first time, install dependencies

```bash
npm install
```

and then to start the client

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `Frontend Tech Stack`

- React: Used for creating the frontend client. Chosen for its dynamic UI rendering capabilities, ideal for building interactive web applications with a rich user interface.
- Tailwind CSS: A utility-first CSS framework used for creating custom and responsive designs quickly. Configured to apply styles with high specificity and without global resets, offering more control over the design.
- React Icons: Offers a wide range of customizable icons to enrich the user interface.
- Typescript: Open-source language building on JavaScript by adding static type definitions
