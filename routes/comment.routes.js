const comment = require('../controller/comment.controller');
module.exports = function(express){
  const router = express.Router();

  router.get('/', comment.getAll);
  router.post('/', comment.save);
  router.get('/find/:commentId', comment.get);
  router.put('/edit/:commentId', comment.update);
  router.delete('/delete/:commentId', comment.delete);

  router.get('/search', comment.search);

  return router;
};