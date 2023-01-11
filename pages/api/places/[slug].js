import dbConnect from "../../../lib/dbConnect";
import Place from "../../../models/Place";

export default async function handler(req, res) {
    
    dbConnect()
    
    const {
        method,
        query: {slug}
    } = req

    if (method !== 'GET') return res.status(400).json({ msg: "This method is not supported" });

    try {
        const place = await Place.findOne({slug});
        if (!place) return res.status(404).json({ msg: "Place does not exists" });
        return res.status(200).json(place);
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
}