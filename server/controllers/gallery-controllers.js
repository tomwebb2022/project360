import { GalleryModel } from "../models/models.js";

export async function addGalleryVideo(req, res) {
  const newVideo = req.body;
  try {
    const videoData = await GalleryModel.create(newVideo);
    res.status(201).json({ status: "success", data: videoData });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function getAllVideos(req, res) {
  try {
    const videoData = await GalleryModel.find();
    res.status(200).json(videoData);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
