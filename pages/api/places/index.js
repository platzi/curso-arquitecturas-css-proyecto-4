import dbConnect from '../../../lib/dbConnect'
import Place from '../../../models/Place'

export default async function handler(req, res) {
    const {method} = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const places = await Place.find({})
                res.status(200).json({success: true, data: places})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break
        case 'POST':
            try {
                const place = await Place.insertMany(
                    req.body
                )
                res.status(201).json({success: true, data: pet})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break
        default:
            res.status(400).json({success: false})
            break
    }
}