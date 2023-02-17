import dbConnect from '../../../lib/dbConnect'
import Booking from '../../../models/Booking'

export default async function handler(req, res){
    
    const {method} = req

    await dbConnect()

    switch (method) {
        case 'GET':
            
            try {
                const bookings = await Booking.find({})
                res.status(200).json(bookings)
            } catch (error) {
                res.status(400).json({success: false})
            }
            break

        case 'POST':
            console.log('enviando......')
            console.log(req.body)
            try {
                const newBooking = new Booking(req.body)
                await newBooking.save()
            
                res.status(201).json({success: true, data: newBooking})
            } catch (error) {
                res.status(400).json({success: error})
            }
            break
        
            default:
            res.status(400).json({success: false})
            break
    }
}