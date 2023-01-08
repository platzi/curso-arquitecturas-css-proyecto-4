import mongoose from 'mongoose'

const PlaceSchema = new mongoose.Schema({
  name: String,
  slug: String,
  price: Number,
  maxGuests: Number,
  generalRating: Number,
  description: String,
  imagesUrls: [String],
  coordinates: {
    lat: {type: Number}, 
    lng: {type: Number}
  },
  location: String,
  address: String,
  extras: [String]
})

export default mongoose.models.Place || mongoose.model('Place', PlaceSchema)