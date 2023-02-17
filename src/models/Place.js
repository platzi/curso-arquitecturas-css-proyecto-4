import mongoose from 'mongoose'

const ReviewSchema = new mongoose.Schema({ image: String, guestName: String, date: String, title: String, content: String });
const RatingSchema = new mongoose.Schema({caption: String, mark: Number})

const PlaceSchema = new mongoose.Schema({
  name: {type: String, required: true},
  slug: {type: String, required: true},
  price: Number,
  maxGuests: Number,
  generalRating: Number,
  description: {type: String, required: true},
  imagesUrls: [{type: String, required: true}],
  coordinates: {
    lat: {type: Number}, 
    lng: {type: Number}
  },
  location: {type: String, required: true},
  address: {type: String, required: true},
  extras: [String],
  reviews: [ReviewSchema],
  ratings: [RatingSchema]
})

export default mongoose.models.Place || mongoose.model('Place', PlaceSchema)