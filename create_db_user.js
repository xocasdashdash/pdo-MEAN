

db = db.getSiblingDB('mean-pdo');
db.createUser({
    user: "gestor",
    pwd: "gestor1234",
    roles: [{
        role: "dbOwner",
        db: "mean-pdo"
    }]
});
db.getUsers();