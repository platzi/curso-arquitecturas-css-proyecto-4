import Place from '../models/Place.js'
import dbConnect from '../lib/dbConnect.js'

dbConnect()

const places = [
    {name:'Sandro', email: 'sandrosimonore@gmail.com'},
    {name:'Marylin', email: 'marylin@gmail.com'}
]

const seedPlaces = async () => {
    try {
        await Place.deleteMany()
        await Place.insertMany(places)
    }catch (error) {
        process.exit()
    }
}

seedPlaces()