import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const updateUser = async (req, res) => {
	const id = req.params.id;

	try {
		const updateUser = await User.findByIdAndUpdate(
			id,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json({
			success: true,
			message: "Successfully updated",
			data: updateUser,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			success: false,
			message: "Failed to update",
		});
	}
};

export const deleteUser = async (req, res) => {
	const id = req.params.id;

	try {
		await User.findByIdAndDelete(id);
		res.status(200).json({
			success: true,
			message: "Successfully deleted",
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			success: false,
			message: "Failed to delete",
		});
	}
};

export const getSingleUser = async (req, res) => {
	const id = req.params.id;

	try {
		const user = await User.findById(id).select("-password");
		res.status(200).json({
			success: true,
			message: "User Found",
			data: user,
		});
	} catch (error) {
		console.log(error);
		res.status(404).json({
			success: false,
			message: "User Not Found",
		});
	}
};

export const getAllUsers = async (req, res) => {
	try {
		const users = await User.find({}).select("-password");
		res.status(200).json({
			success: true,
			message: "Users Found",
			data: users,
		});
	} catch (error) {
		console.log(error);
		res.status(404).json({
			success: false,
			message: "Users Not Found",
		});
	}
};

export const getUserProfile = async (req, res) => {
	const userid = req.userId;
	console.log(userid);
	try {
		const user = await User.findById(userid);

		if (!user) {
			return res
				.status(404)
				.json({ success: false, message: "User not found" });
		}

		const { password, ...rest } = user._doc;

		res.status(200).json({
			success: true,
			message: "Profile data is found",
			data: { ...rest },
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, message: "Something went wrong" });
	}
};

export const getMyAppointments = async (req, res) => {
	try {
		//step1: retrieve appointments from booking
		const bookings = await Booking.find({ user: req.userId });

		//step2: extract doctor ids from appointments booking
		const doctorIds = bookings.map((e) => e.doctor.id);

		//step3: retrieve doctor using doctor ids
		const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select(
			"-password"
		);

		res.status(200).json({
			success: true,
			message: "Appointments are getting",
			data: doctors,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			success: false,
			message: "Appointments are not getting, Something went wrong",
		});
	}
};
