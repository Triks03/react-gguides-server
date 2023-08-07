const uuid = require('uuid');
const path = require('path')
const fs = require('fs')

class ImageService {
    saveImage(saveImage){
        try {
            const imageName = uuid.v4() + '.jpg';
            const imagePath = path.resolve('static', imageName);
            saveImage.mv(imagePath);
            return imageName;
        } catch (e) {
            console.log(e);
        }
    }
    deleteImage(deleteImage){
        try {
            const imagePath = path.resolve('static', deleteImage);
            fs.unlink(imagePath, (error) => {
                if(error){
                    console.log('File was not delete! Error')
                }
            })
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new ImageService();