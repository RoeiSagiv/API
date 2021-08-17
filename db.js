var MongoClient = require('mongodb').MongoClient;
var config = require('./config');

const remoteDbPassword = config.dbPassword;
const dbUserName = config.dbUserName;
const connectionString =`mongodb+srv://${dbUserName}:${remoteDbPassword}@cluster0.j8so0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`; 


var _db;
var _items;

module.exports = {
    connectToDb: async () => {
        try {
            MongoClient.connect(connectionString, { useUnifiedTopology: true } , function(err, client) {
                try {
                    _db = client.db("Is");
                    _items = _db.collection("stats");
                    console.log('Connected to mongo!!!');
                } catch {
                    console.log("error")
                }
            });
        } catch (err) {
            console.log(`Could not connect to MongoDB (err) => ${err}`);
        }
    },
    connection: connectionString,
    getDb: () => {return _db;},
    addItem: (item) => {
        _items.insertOne(item, {}, function (err, doc) {
            if (err) {
                return 500
            }
        });
        return 200
    },
    getAllItems: (callback) => {
        return _items.find({}).toArray(callback);
    },
    clear:()=>
    {
        _items.forEach(eachColl => db[eachColl].remove({}))
    },
    updateStats:(item)=>{
        _items.clear();
        addItem(item);
    }
};

