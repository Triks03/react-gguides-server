const Router = require('express')
const characterController = require('../controllers/character.controller')
const router = new Router()

// router.post('/createCharacter', characterController.createCharacter)
router.get('/characters', characterController.getCharacters)
// router.get('/character', characterController.getOneCharacter)
// router.put('/character', characterController.updateCharacter)
// router.post('/deleteCharacter', characterController.deleteCharacter)




module.exports = router