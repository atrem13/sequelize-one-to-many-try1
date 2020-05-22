const {
  tutorial,
  Sequelize,
} = require('../models/index');
const {e_get_id, e_get_all, e_search} =  require('./variable/action.variable');
const rs = require('./function/return_success.function');
const re = require('./function/return_error.function');

const Op = Sequelize.Op;

let self = {};

self.get = (req, res) => {
  let id = req.params.tutorialId;
  tutorial.findByPk(id, 
    {
      include:[
        'comments'
      ]
    }
  ).then((data) => {
    if(data){
      rs(res, data);
    }else{
      re(res, e_get_id);
    }
  }).catch((err) => {
    re(res, err);
  });
};

self.getAll = (req, res) => {
  tutorial.findAll(
    {
      include:[
        'comments'
      ]
    }
  ).then((data) => {
    if(data.length > 0){
      rs(res, data);
    }else{
      re(res, e_get_all);
    }
  }).catch((err) => {
    re(res, err)
  })
};

self.search = (req, res) => {
  let text = req.query.text;
  tutorial.findAll(
    {
      where:{
        [Op.or]:{
          name:{
            [Op.like]: `%${text}%`
          },
          desc:{
            [Op.like]: `%${text}%`
          }
        }
      }
    }
  ).then((data) => {
    if(data.length > 0){
      rs(res, data);
    }else{
      re(res, e_search);
    }
  }).catch((err) => {
    re(res, err);
  });
};

self.save = (req, res) => {
  tutorial.create(req.body)
  .then((data) => {
    if(data){
      rs(res, data);
    }
  }).catch((err) => {
    re(res, err);
  });
};

self.update = (req, res) => {
  let id = req.params.tutorialId;
  tutorial.update(req.body,
    {
      where:{
        id:id
      }
    }
  ).then((data) => {
    if(data[0] > 0){
      rs(res, data);
    }else{
      re(res, e_get_id);
    }
  }).catch((err) => {
    re(res, err);
  });
};

self.delete = (req, res) => {
  let id = req.params.tutorialId;
  tutorial.destroy(
    {
      where:{
        id:id
      }
    }
  ).then((data) => {
    if(data){
      rs(res, data);
    }else{
      re(res, e_get_id);
    }
  }).catch((err) => {
    re(res, err);
  });
};

module.exports = self;