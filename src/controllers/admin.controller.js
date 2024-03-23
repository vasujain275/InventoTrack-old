import { Admin } from "../models/admin.model.js";
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { uploadToCloudinary } from "../utils/cloudinary";
import { ApiResponse } from "../utils/ApiResponse.js"

const registerUser = asyncHandler(async (req, res, next) => {
  const {
    firstName,
    lastName,
    password,
    email,
    phone
  } = req.body;

  const existingUser = Admin.findOne({
    $or: [{ email }, { phone }]
  });

  if (existingUser) {
    throw new ApiError(400, "User already exist!");
  }

  const avatarLocalImage = req.files?.avatar[0]?.path;

  if (!avatarLocalImage) {
    throw new ApiError(404, "Avatar Not Found!");
  }

  const avatar = await uploadToCloudinary(avatarLocalImage);

  const admin = await Admin.create({
    firstName,
    lastName,
    password,
    email,
    phone,
    avatar: avatar.url
  })

  const createdAdmin = await Admin.findbyId(admin._id).select(
    "-password -refreshToken"
  )

  if (!createdAdmin) {
    throw new ApiError(400, "Something Went Wrong Registering User")
  }

  res
    .status(200)
    .json(new ApiResponse(
      200,
      createdAdmin,
      "Admin Created Successfully!"
    ))
})


export { registerUser }
