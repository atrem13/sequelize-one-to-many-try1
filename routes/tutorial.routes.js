const tutorial = require('../controller/tutorial.controller');
module.exports = function(express){
  const router = express.Router();

  router.get('/', tutorial.getAll);
  router.post('/', tutorial.save);
  router.get('/find/:tutorialId', tutorial.get);
  router.put('/edit/:tutorialId', tutorial.update);
  router.delete('/delete/:tutorialId', tutorial.delete);

  router.get('/search/', tutorial.search);

  return router;
}