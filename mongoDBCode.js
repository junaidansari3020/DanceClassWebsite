//Inserting data in mongo db.
show dbs
use harryKart
show collections

db.items.insertOne({name:"Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98})

db.items.find()

db.items.insertMany([{name:"Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98}, {name:"Moto 30s", price: 29000, rating: 2.5, qty: 124, sold: 244}, {name:"Realme 80s", price: 129000, rating: 2.5, qty: 424, sold: 94, isBig:true}])

//Searching data in mongo db.
db.items.find({price: 29000})

db.items.find({price: {$gte: 29000}})

//ye khali rating get karega.
db.items.find({rating: {$gt: 3.5}}, {rating: 1})

//ye rating and qty bhi get karega.
db.items.find({rating: {$gt: 3.5}}, {rating: 1, qty: 1})

//And Operator
db.items.find({price: {$gt: 29000}, rating: {$gt: 2.5}})
db.items.find({rating: {$lt: 3.5}, price: {$gt: 114000}})

//Or Operator
db.items.find({$or:[{rating: {$lt: 3.5}}, {price: {$gt: 114000}}]})

//Deleting any items from the Mongo Database
db.items.deleteOne({price: 22000})  //will delete first entry incase of multi document match
db.items.deleteMany({price: 129000})

//Updating items in Mongo Database
db.items.updateOne({name: "Moto 30s"},{$set: {price: 2}})
db.items.updateMany({name: "Moto 30s"},{$set: {price: 3,rating: 1}})