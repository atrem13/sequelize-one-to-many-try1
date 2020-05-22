const tutorial = require('../controller/tutorial.controller');
module.exports = function(express){
  const router = express.Router();

  router.get('/', tutorial.getAll);
  router.post('/', tutorial.save);
  router.get('/:tutorialId', tutorial.get);
  router.put('/:tutorialId', tutorial.update);
  router.delete('/:tutorialId', tutorial.delete);

  router.get('/with/search', tutorial.search);

  return router;
}