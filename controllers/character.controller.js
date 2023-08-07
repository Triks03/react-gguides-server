const db = require('../db')
const path = require('path')
const fs = require('fs')
const stream = require('stream')
const characterService = require('../services/character.service')
const { log } = require('console')

class CharacterController {
    // async createCharacter(req, res) {
    //     try {
    //         const newCharacter = await characterService.createCharacter(req.body.name, req.files.image, req.body.element)
    //         res.status(200).json(newCharacter)
    //     } catch (e) {
    //         res.status(500).json(e)
    //     }
    // }
    async getCharacters(req, res) {
        try {
            const characters = await characterService.getCharacters()
            res.status(200).json(characters)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    // async getOneCharacter(req, res) {
    //     try {
    //         const character = await characterService.getOneCharacter(req.query.id)
    //         res.status(200).json(character);
    //     } catch (e) {
    //         res.status(500).json(e)
    //     }
    // }
    // async updateCharacter(req, res) {
    //     try {
    //         const {id, name, element, oldImage} = req.body
    //         const character = await characterService.updateCharacter(id, name, element, oldImage, req.files.image)
    //         res.status(200).json(character)
    //     } catch (e) {
    //         res.status(500).json(e)
    //     }
    // }
    // async deleteCharacter(req, res) {
    //     try {
    //         const character = await characterService.deleteCharacter(req.body.id, req.body.oldImage)
    //         res.status(200).json(character)
    //     } catch (e) {
    //         res.status(500).json(e)
    //     }
    // }
}

module.exports = new CharacterController()