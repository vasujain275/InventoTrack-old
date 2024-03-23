import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadToCloudinary = async (localFilePath) => {

  try {

    if (!localFilePath) {
      return null;
    }

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto"
    });

    fs.unlink(localFilePath);
    return response;

  } catch (error) {
    fs.unlink(localFilePath);
    return null;
  }

}

export { uploadToCloudinary }
