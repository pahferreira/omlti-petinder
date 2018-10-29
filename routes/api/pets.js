const express = require("express");
const router = express.Router();
const passport = require("passport");

const PetController = require("../../controllers/petsController");

/*
  Route: GET para api/pets/test
  Description: Rota teste para pets
  Access: public
*/
router.get("/test", PetController.test);

/*
  Route: GET para api/pets/all
  Description: Retorna todos os pets cadastrados
  Access: public
*/
router.get("/all", PetController.getAll);

/*
  Route: GET para api/pets/available
  Description: Retorna todos os pets cadastrados e não adotados
  Access: public
*/
router.get("/available", PetController.available);


/*
  Route: POST para api/pets/create
  Description: Rota para criar pet
  Access: private
*/
router.post('/create', passport.authenticate('jwt', { session: false }), PetController.createPet);

/*
  Route: GET para api/pets/:petID
  Description: Rota para retornar as infos de um pet
  Access: public
*/
router.get("/:petID", PetController.getPetById);

/*
  Route: POST para api/pets/:petID
  Description: Rota para atualizar as infos de um pet
  Access: private
*/
router.post("/:petID", passport.authenticate('jwt', { session: false }), PetController.updatePetById);

/*
  Route: DELETE para api/pets/:petID
  Description: Rota para deletar um pet
  Access: private
*/
router.delete("/:petID", passport.authenticate('jwt', { session: false }), PetController.deletePetById);

module.exports = router;
