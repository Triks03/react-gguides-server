const db = require('../db')
const imageService = require('./image.service')

class CharacteService {
    // async createCharacter(name, image, element){
    //     const imageName = imageService.saveImage(image);
    //     const newCharacter = await db.query(`INSERT INTO character (name, image, element) values ($1, $2, $3) RETURNING *`, [name, imageName, element])
    //     return newCharacter.rows[0]
    // }

    async getCharacters(){
        const character = await db.query(`select * FROM character`)
        return character.rows
    }

    // async getOneCharacter(id){
    //     const character = await db.query(`select * FROM character where id = $1`, [id])
    //     return character.rows[0]
    // }

    // async updateCharacter(id, name, element, oldImage, newImage){
    //     imageService.deleteImage(oldImage)
    //     const imageName = imageService.saveImage(newImage);
    //     const updateCharacter = await db.query(`UPDATE character set name = $1, image = $2, element = $3 where id = $4 RETURNING *`, [name, imageName, element, id])
    //     return updateCharacter.rows[0]
    // }

    // async deleteCharacter(id, oldImage){
    //     imageService.deleteImage(oldImage)
    //     const deleteCharacter = await db.query(`DELETE FROM character where id = $1`, [id])
    //     return deleteCharacter.rows[0]
    // }
}

module.exports = new CharacteService();