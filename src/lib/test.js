import cloudinary from "./cloudinary";

async function testUpload() {
  try {
    const result = await cloudinary.uploader.upload("https://via.placeholder.com/150", {
      folder: "test-folder",
    });
    console.log("Upload successful:", result.secure_url);
  } catch (error) {
    console.error("Cloudinary upload error:", error);
  }
}

testUpload();
