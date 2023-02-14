import mongoose from 'mongoose'

const ReviewSchema = new mongoose.Schema({ image: String, guestName: String, date: String, title: String, content: String });
const RatingSchema = new mongoose.Schema({caption: String, mark: Number})
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
  extras: [String],
  reviews: [ReviewSchema],
  ratings: [RatingSchema]
})

export default mongoose.models.Place || mongoose.model('Place', PlaceSchema)