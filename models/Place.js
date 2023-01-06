import mongoose from 'mongoose'

const PlaceSchema = new mongoose.Schema({
  name: String,
  email: String
})

export default mongoose.models.Place || mongoose.model('Place', PlaceSchema)