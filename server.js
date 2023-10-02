const express = require("express");
const expressHandlebars = require("express-handlebars");
const session = require("express-session");
const { ApolloServer } = require('apollo-server-express');
const path = require("path");
const { authMiddleware } = require('./utils/auth');
const MongooseStore = require("connect-session-sequelize")(session.Store);
const mongoose = require("./config/connection");
const controllers = require("./controllers");
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const helpers = require("./utils/helpers");

const handlebars = expressHandlebars.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });

const sess = {
    secret: "Secret Agent Man",
    cookie: {
     
        maxAge: 28800000,
    },
    resave: false,
    saveUninitialized: false,
    store: new MongooseStore({
        db: mongoose,
    }),
};
app.use(session(sess));

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(controllers);

mongoose.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("SUCCESS✅ SERVER CONNECTED! 🌎 🤙" + PORT));
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

  const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });
    
    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      })
    })
    };
    
  // Call the async function to start the server
    startApolloServer(typeDefs, resolvers);