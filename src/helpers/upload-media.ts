import firebaseApp from "@/config/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const UploadFilesToFirebaseAndReturnUrls = async (files: []) => {
  try {
    const storage = getStorage(firebaseApp);
    // upload files and get the responses
    const uploadedFilesResponses = await Promise.all(
      files.map((file: any) => {
        const storageRef = ref(storage, `images/${file.name}`);
        return uploadBytes(storageRef, file);
      })
    );

    // use the responses to get the download urls
    const uploadedFilesDownloadUrls = await Promise.all(
      uploadedFilesResponses.map((res) => {
        return getDownloadURL(res.ref);
      })
    );
    return uploadedFilesDownloadUrls;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
