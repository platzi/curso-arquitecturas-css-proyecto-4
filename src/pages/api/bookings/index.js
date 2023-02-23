import dbConnect from '../../../lib/dbConnect'
import Booking from '../../../models/Booking'
import { authOptions } from '../auth/[...nextauth]'
import { getServerSession } from "next-auth/next"

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
            
            const session = await getServerSession(req, res, authOptions)

             if (!session) {
                return res.status(401).json({ message: "You must be logged in." });
            } 
            
            try {
                const newBooking = new Booking(req.body)
                await newBooking.save() // What is the difference with Booking.create()
                res.status(201).json({success: true, data: newBooking})

            } catch (error) {
                res.status(400).json({success: error})
            }

            break    
    }
}