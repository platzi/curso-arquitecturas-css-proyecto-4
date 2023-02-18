import mongoose from 'mongoose'

const BookingSchema = new mongoose.Schema({
  placeId: {type:mongoose.Schema.Types.ObjectId, required:true, ref:'Place'},
  guestId: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  checkin: {type: Date, required: true},
  checkout: {type: Date, required: true},
  adults: Number,
  children: Number,
  infants: Number,
  totalPrice: Number  
})

export default mongoose.models.BookingSchema || mongoose.model('Booking', BookingSchema)