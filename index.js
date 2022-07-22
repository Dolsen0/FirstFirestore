import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore} from "firebase-admin/firestore"
import {credentials} from './credentials.js'

initializeApp({
    credential: cert(credentials)
})

const db = getFirestore()

const car = {
    make: "Mazda",
    model: "3",
    year: 2008,
    color: "silver"
}

// CRUD
// C create with .add and .set
//creates cars collection and adds const car.
// db.collection('cars').add(car)
//     .then(doc => {
//         console.log('added doc: ', doc.id)
//     })
//     .catch(err => console.error(err))


// adds/replaces info in db. If you omit info that is previously in DB it will be
//removed

// db.collection('cars').doc('lambo')
//     .set({make: "lambo", model: "diablo", year: 2018, color: "yellow"})


//CRUD
//U update


//merges info into collection. retains previously saved info in db.
// db.collection('cars').doc('lambo')
// .update(engine: "rear")



//CRUD
// Read

//gets info on 'lambo'
// db.collection('cars').doc('lambo').get()
// .then(doc => {
//     console.log(doc.data())
// })
// .catch(console.error)

//retrieves a single doc/

// db.collection('cars').doc('lambo').get()
// .then(doc => {
//     console.log(doc.id) //doc.id is a property
//     console.log(doc.data()) //doc.data() is a method
// })
// .catch(console.error)

//get a whole collection


// db.collection('cars').get()
// .then(collection => {
//     collection.docs.forEach(doc => console.log(doc.id, doc.data()))
// })
// .catch(console.error)

//Query docs from collection
db.collection('cars')
    .where('year', '>=', 2015)
    .get()
        .then(collection => {
           const cars = collection.docs.map(doc => {
            let car = doc.data()
            car.id = doc.id
            return car
        })
           console.log(cars)
           console.log(car.id)
        })
        .catch(console.error)
