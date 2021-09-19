module.exports = {
    //uri: "mongodb://localhost:27017/$seu_banco"
    uri: "mongodb+srv://user1:user1@webapi-aap.yare4.mongodb.net/hamburguerDatabase?retryWrites=true&w=majority"
};
/*
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://user1:<password>@webapi-aap.yare4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/