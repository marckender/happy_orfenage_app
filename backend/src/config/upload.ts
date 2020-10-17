import multer from 'multer'
import path from "path";

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      const filename = `${Date.now()}-${file.originalname}`;

      cb(null, filename);

      //callback, primeiro um erro depois o resultado
    },
  })
};