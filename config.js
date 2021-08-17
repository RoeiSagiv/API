module.exports = {
    serverPort: process.env.PORT || 3000,
    dbUserName: process.env.dbUserName || "Admin",
    dbPassword: process.env.dbPassword || "123456Is",
    //statsInPersistence: process.env.statsInPersistence || true   // should the stats be saved in persistent storage. false for saving transiently.
}