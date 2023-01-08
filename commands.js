// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis
use jaskis
'switched to db jaskis'


// 2. Create a collection called bounties
db.createCollection('bounties')
show collections
// bounties

// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object
db.bounties.insertOne({
  name: "Thanoceros",
  species: "Rhinoceros",
  location: "Grasslands",
  wantedFor: "Eating too much grass",
  client: "Songbird",
  reward: 10000,
  captured: false
})
// { acknowledged: true,
//   insertedId: ObjectId("63ba2569643a3819b4dbe216") }

// 2. Query for all bounties in the bounties collection
db.bounties.find({reward:{$gt: 0}})
// { _id: ObjectId("63ba30f8643a3819b4dbe21d"),
//   name: 'Thanoceros',
//   species: 'Rhinoceros',
//   location: 'Grasslands',
//   wantedFor: 'Eating too much grass',
//   client: 'Songbird',
//   reward: 10000,
//   captured: false }




// 3. Insert many bounties at once using the given objects

db.bounties.insertMany([{
    "name": "Lokinkajou",
    "species": "Kinkajou",
    "location": "Tropical rainforest",
    "wantedFor": "Partying too late at night",
    "client": "White tiger",
    "reward": 1000,
    "captured": false
  },
  {
    "name": "Nebullama",
    "species": "Llama",
    "location": "Grasslands",
    "wantedFor": "Drinking all the water from the ocean",
    "client": "Songbird",
    "reward": 2500,
    "captured": false
  },
  {
    "name": "Polarwind",
    "species": "Polar Bear",
    "location": "Arctic",
    "wantedFor": "Not hibernating",
    "client": "Sabertooth",
    "reward": 4000,
    "captured": false
  },
  {
    "name": "Wrecking Crows",
    "species": "Crow",
    "location": "Grasslands",
    "wantedFor": "Cawing too loudly",
    "client": "Red wolf",
    "reward": 40000,
    "captured": false
  },
  {
    "name": "Grandhog",
    "species": "Groundhog",
    "location": "Woodlands",
    "wantedFor": "Not coming out of the hole on time and prolonging winter",
    "client": "Songbird",
    "reward": 50000,
    "captured": false
  },
  {
    "name": "Grim Panda",
    "species": "Giant Panda",
    "location": "Temperate forest",
    "wantedFor": "Eating all the bamboo",
    "client": "Red wolf",
    "reward": 5000,
    "captured": false
  }])
// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
db.bounties.find({location: "Grasslands"})

// 2. Query for all bounties with a reward worth 10000 or more
db.bounties.find({reward:{$gte: 10000}})

// 3. Query for all bounties, but exclude the client attribute from being shown
db.bounties.find({}, {client: 0})

// 4. Query for a Groundhog in the Woodlands
db.bounties.find({species: "Groundhog", location: "Woodlands"})
{ _id: ObjectId("63ba3696643a3819b4dbe222"),
  name: 'Grandhog',
  species: 'Groundhog',
  location: 'Woodlands',
  wantedFor: 'Not coming out of the hole on time and prolonging winter',
  client: 'Songbird',
  reward: 50000,
  captured: false }
 
// Update and Delete
// 1. Update the reward for Polarwind to 10000
db.bounties.updateOne({name: "Polarwind"}, {$set:{reward:10000}})
{ acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0 }



// 2. Remove Lokinkajou
db.bounties.deleteOne({name: "Lokinkajou"})
{ acknowledged: true, deletedCount: 1 }

// 3. Delete all bounties sent by Songbird
db.bounties.deleteMany({client: "Songbird"})
// { acknowledged: true, deletedCount: 3 }
db.bounties.find({})
// { _id: ObjectId("63ba3696643a3819b4dbe220"),
//   name: 'Polarwind',
//   species: 'Polar Bear',
//   location: 'Arctic',
//   wantedFor: 'Not hibernating',
//   client: 'Sabertooth',
//   reward: 10000,
//   captured: false }
// { _id: ObjectId("63ba3696643a3819b4dbe221"),
//   name: 'Wrecking Crows',
//   species: 'Crow',
//   location: 'Grasslands',
//   wantedFor: 'Cawing too loudly',
//   client: 'Red wolf',
//   reward: 40000,
//   captured: false }
// { _id: ObjectId("63ba3696643a3819b4dbe223"),
//   name: 'Grim Panda',
//   species: 'Giant Panda',
//   location: 'Temperate forest',
//   wantedFor: 'Eating all the bamboo',
//   client: 'Red wolf',
//   reward: 5000,
//   captured: false }


// 4. Update all captured statuses to true
db.bounties.updateMany({}, {$set:{captured: true}})
// { acknowledged: true,
//   insertedId: null,
//   matchedCount: 3,
//   modifiedCount: 3,
//   upsertedCount: 0 }
db.bounties.find({})
// { _id: ObjectId("63ba3696643a3819b4dbe220"),
//   name: 'Polarwind',
//   species: 'Polar Bear',
//   location: 'Arctic',
//   wantedFor: 'Not hibernating',
//   client: 'Sabertooth',
//   reward: 10000,
//   captured: true }
// { _id: ObjectId("63ba3696643a3819b4dbe221"),
//   name: 'Wrecking Crows',
//   species: 'Crow',
//   location: 'Grasslands',
//   wantedFor: 'Cawing too loudly',
//   client: 'Red wolf',
//   reward: 40000,
//   captured: true }
// { _id: ObjectId("63ba3696643a3819b4dbe223"),
//   name: 'Grim Panda',
//   species: 'Giant Panda',
//   location: 'Temperate forest',
//   wantedFor: 'Eating all the bamboo',
//   client: 'Red wolf',
//   reward: 5000,
//   captured: true }

// Bonus: The Scavengers
// With your help, Tony and the Scavengers have made the animal world a safer place! Now, Tony wants to document all the Scavengers so their good deeds are never forgotten. Make a new collection in the JASKIS database called scavengers and insert all the given Scavenger data. Each scavenger has the following information.

// name: string
// joined: date
// power: string
// weapon: string
// captured: array of bounty objects
// With the collection now created, Tony wants you to learn some more advanced queries. Let's try some out!

db.scavengers.insertMany([
  {
    "name": "Captain A'Meerkat",
    "joined": new Date('2011-07-22'),
    "power": "Thermoregulation",
    "weapon": "Shovel",
    "captured": [
      {
        "name": "Grim Panda",
        "species": "Giant Panda",
        "location": "Temperate forest",
        "wantedFor": "Eating all the bamboo",
        "client": "Red wolf",
        "reward": 5000,
        "captured": true
      }
    ]
  },
  {
    "name": "The Hamster",
    "joined": new Date('2011-07-22'),
    "power": "Stealth",
    "weapon": "Giant rolling ball",
    "captured": [
      {
        "name": "Polarwind",
        "species": "Polar Bear",
        "location": "Arctic",
        "wantedFor": "Not hibernating",
        "client": "Sabertooth",
        "reward": 10000,
        "captured": true
      }
    ]
  },
  {
    "name": "Thowl",
    "joined": new Date('2011-07-22'),
    "power": "Night vision",
    "weapon": "Lasers",
    "captured": [
      {
        "name": "Thanoceros",
        "species": "Rhinoceros",
        "location": "Grasslands",
        "wantedFor": "Eating too much grass",
        "client": "Songbird",
        "reward": 10000,
        "captured": true
      },{
        "name": "Polarwind",
        "species": "Polar Bear",
        "location": "Arctic",
        "wantedFor": "Not hibernating",
        "client": "Sabertooth",
        "reward": 10000,
        "captured": true
      }
    ]
  },
  {
    "name": "Brown Recluse",
    "joined": new Date('2011-07-22'),
    "power": "Inciting fear into the heart of enemies",
    "weapon": "Webs",
    "captured": [
      {
        "name": "Thanoceros",
        "species": "Rhinoceros",
        "location": "Grasslands",
        "wantedFor": "Eating too much grass",
        "client": "Songbird",
        "reward": 10000,
        "captured": true
      },{
        "name": "Wrecking Crows",
        "species": "Crow",
        "location": "Grasslands",
        "wantedFor": "Cawing too loudly",
        "client": "Red wolf",
        "reward": 40000,
        "captured": true
      }
    ]
  },
  {
    "name": "Falconeye",
    "joined": new Date('2011-07-22'),
    "power": "Flight",
    "captured": [
      {
        "name": "Wrecking Crows",
        "species": "Crow",
        "location": "Grasslands",
        "wantedFor": "Cawing too loudly",
        "client": "Red wolf",
        "reward": 40000,
        "captured": true
      }
    ]
  },
  {
    "name": "Scarlet Wolf",
    "joined": new Date('2015-05-01'),
    "power": "Hunting",
    "captured": [
      {
        "name": "Grim Panda",
        "species": "Giant Panda",
        "location": "Temperate forest",
        "wantedFor": "Eating all the bamboo",
        "client": "Red wolf",
        "reward": 5000,
        "captured": true
      }
    ]
  },
  {
    "name": "Black Jaguar",
    "joined": new Date('2018-04-23'),
    "power": "Camoflauge",
    "captured": [
      {
        "name": "Grim Panda",
        "species": "Giant Panda",
        "location": "Temperate forest",
        "wantedFor": "Eating all the bamboo",
        "client": "Red wolf",
        "reward": 5000,
        "captured": true
      },{
        "name": "Thanoceros",
        "species": "Rhinoceros",
        "location": "Grasslands",
        "wantedFor": "Eating too much grass",
        "client": "Songbird",
        "reward": 10000,
        "captured": true
      }
    ]
  }
])
// { acknowledged: true,
//   insertedIds: 
//    { '0': ObjectId("63ba3db0643a3819b4dbe224"),
//      '1': ObjectId("63ba3db0643a3819b4dbe225"),
//      '2': ObjectId("63ba3db0643a3819b4dbe226"),
//      '3': ObjectId("63ba3db0643a3819b4dbe227"),
//      '4': ObjectId("63ba3db0643a3819b4dbe228"),
//      '5': ObjectId("63ba3db0643a3819b4dbe229"),
//      '6': ObjectId("63ba3db0643a3819b4dbe22a") } }

// Queries


// Find all Scavengers who joined the team after December 31, 2011.
// -We can do this using the $gte comparison operator like we normally do. The tricky part is in how we specify the date using the Date method().
db.scavengers.find({joined: {$gte:  new Date ("2011-12-31")} })
// { _id: ObjectId("63ba3db0643a3819b4dbe229"),
//   name: 'Scarlet Wolf',
//   joined: 2015-05-01T00:00:00.000Z,
//   power: 'Hunting',
//   captured: 
//    [ { name: 'Grim Panda',
//        species: 'Giant Panda',
//        location: 'Temperate forest',
//        wantedFor: 'Eating all the bamboo',
//        client: 'Red wolf',
//        reward: 5000,
//        captured: true } ] }
// { _id: ObjectId("63ba3db0643a3819b4dbe22a"),
//   name: 'Black Jaguar',
//   joined: 2018-04-23T00:00:00.000Z,
//   power: 'Camoflauge',
//   captured: 
//    [ { name: 'Grim Panda',
//        species: 'Giant Panda',
//        location: 'Temperate forest',
//        wantedFor: 'Eating all the bamboo',
//        client: 'Red wolf',
//        reward: 5000,
//        captured: true },
//      { name: 'Thanoceros',
//        species: 'Rhinoceros',
//        location: 'Grasslands',
//        wantedFor: 'Eating too much grass',
//        client: 'Songbird',
//        reward: 10000,
//        captured: true } ] }


// Find all Scavengers who helped catch Thanoceros.

// -We can query an array of embedded documents similar to how we normally do equality queries. We just have to include the nested key value we want to find using dot notation.

db.scavengers.find({"captured.name":"Thanoceros"})
// { _id: ObjectId("63ba3db0643a3819b4dbe226"),
//   name: 'Thowl',
//   joined: 2011-07-22T00:00:00.000Z,
//   power: 'Night vision',
//   weapon: 'Lasers',
//   captured: 
//    [ { name: 'Thanoceros',
//        species: 'Rhinoceros',
//        location: 'Grasslands',
//        wantedFor: 'Eating too much grass',
//        client: 'Songbird',
//        reward: 10000,
//        captured: true },
//      { name: 'Polarwind',
//        species: 'Polar Bear',
//        location: 'Arctic',
//        wantedFor: 'Not hibernating',
//        client: 'Sabertooth',
//        reward: 10000,
//        captured: true } ] }
// { _id: ObjectId("63ba3db0643a3819b4dbe227"),
//   name: 'Brown Recluse',
//   joined: 2011-07-22T00:00:00.000Z,
//   power: 'Inciting fear into the heart of enemies',
//   weapon: 'Webs',
//   captured: 
//    [ { name: 'Thanoceros',
//        species: 'Rhinoceros',
//        location: 'Grasslands',
//        wantedFor: 'Eating too much grass',
//        client: 'Songbird',
//        reward: 10000,
//        captured: true },
//      { name: 'Wrecking Crows',
//        species: 'Crow',
//        location: 'Grasslands',
//        wantedFor: 'Cawing too loudly',
//        client: 'Red wolf',
//        reward: 40000,
//        captured: true } ] }
// { _id: ObjectId("63ba3db0643a3819b4dbe22a"),
//   name: 'Black Jaguar',
//   joined: 2018-04-23T00:00:00.000Z,
//   power: 'Camoflauge',
//   captured: 
//    [ { name: 'Grim Panda',
//        species: 'Giant Panda',
//        location: 'Temperate forest',
//        wantedFor: 'Eating all the bamboo',
//        client: 'Red wolf',
//        reward: 5000,
//        captured: true },
//      { name: 'Thanoceros',
//        species: 'Rhinoceros',
//        location: 'Grasslands',
//        wantedFor: 'Eating too much grass',
//        client: 'Songbird',
//        reward: 10000,
//        captured: true } ] }


// Find all Scavengers who helped catch an animal bounty with a reward greater than $11000.

// -Again, we can do a comparison query on an embedded document the same way we do a normal comparison query. We just have to specify what nested key we want to run the comparison on.

db.scavengers.find({"captured.reward": {$gte: 11000}})
// { _id: ObjectId("63ba3db0643a3819b4dbe227"),
//   name: 'Brown Recluse',
//   joined: 2011-07-22T00:00:00.000Z,
//   power: 'Inciting fear into the heart of enemies',
//   weapon: 'Webs',
//   captured: 
//    [ { name: 'Thanoceros',
//        species: 'Rhinoceros',
//        location: 'Grasslands',
//        wantedFor: 'Eating too much grass',
//        client: 'Songbird',
//        reward: 10000,
//        captured: true },
//      { name: 'Wrecking Crows',
//        species: 'Crow',
//        location: 'Grasslands',
//        wantedFor: 'Cawing too loudly',
//        client: 'Red wolf',
//        reward: 40000,
//        captured: true } ] }
// { _id: ObjectId("63ba3db0643a3819b4dbe228"),
//   name: 'Falconeye',
//   joined: 2011-07-22T00:00:00.000Z,
//   power: 'Flight',
//   captured: 
//    [ { name: 'Wrecking Crows',
//        species: 'Crow',
//        location: 'Grasslands',
//        wantedFor: 'Cawing too loudly',
//        client: 'Red wolf',
//        reward: 40000,
//        captured: true } ] }

// Find all Scavengers that don't have a weapon.

// -We can do a query for documents that have null or missing fields by using a normal equality query and checking for the value null.

db.scavengers.find({"weapon": null})
// { _id: ObjectId("63ba3db0643a3819b4dbe228"),
//   name: 'Falconeye',
//   joined: 2011-07-22T00:00:00.000Z,
//   power: 'Flight',
//   captured: 
//    [ { name: 'Wrecking Crows',
//        species: 'Crow',
//        location: 'Grasslands',
//        wantedFor: 'Cawing too loudly',
//        client: 'Red wolf',
//        reward: 40000,
//        captured: true } ] }
// { _id: ObjectId("63ba3db0643a3819b4dbe229"),
//   name: 'Scarlet Wolf',
//   joined: 2015-05-01T00:00:00.000Z,
//   power: 'Hunting',
//   captured: 
//    [ { name: 'Grim Panda',
//        species: 'Giant Panda',
//        location: 'Temperate forest',
//        wantedFor: 'Eating all the bamboo',
//        client: 'Red wolf',
//        reward: 5000,
//        captured: true } ] }
// { _id: ObjectId("63ba3db0643a3819b4dbe22a"),
//   name: 'Black Jaguar',
//   joined: 2018-04-23T00:00:00.000Z,
//   power: 'Camoflauge',
//   captured: 
//    [ { name: 'Grim Panda',
//        species: 'Giant Panda',
//        location: 'Temperate forest',
//        wantedFor: 'Eating all the bamboo',
//        client: 'Red wolf',
//        reward: 5000,
//        captured: true },
//      { name: 'Thanoceros',
//        species: 'Rhinoceros',
//        location: 'Grasslands',
//        wantedFor: 'Eating too much grass',
//        client: 'Songbird',
//        reward: 10000,
//        captured: true } ] }