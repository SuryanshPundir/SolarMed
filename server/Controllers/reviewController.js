import Review from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";

// get all reviews

export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({})

        res.status(200).json({ success: true, message: "Successfully retrieved", data: reviews });
    } catch (error) {
        console.log(error);
        res
            .status(404)
            .json({
                success: false,
                message: "Not Found",
            });
    }
};

//create review
export const createReview = async (req, res) => { 
    if (!req.body.doctor) req.body.doctor = req.params.doctorId;
    console.log(req.body.doctor);
    if (!req.body.user) req.body.user = req.userId;

    const newReview = new Review(req.body)

    try {
        const savedReview = await newReview.save();

        await Doctor.findByIdAndUpdate(req.body.doctor, {
            $push:{reviews: savedReview._id}
        })
        res.status(200).json({success: true, message: "Review submitted successfully" , data: savedReview})
    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
        
    }
}