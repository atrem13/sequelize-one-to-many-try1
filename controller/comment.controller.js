const {
  comment,
  Sequelize
} = require('../models/index');
const Op = Sequelize.Op;

const rs = require('./function/return_success.function');
const re = require('./function/return_error.function');
const {e_get_id, e_get_all, e_search} = require('./variable/action.variable');

let self = {};

self.get = (req, res) => {
  let id = req.params.commentId;
  comment.findByPk(id, {
    include:[
      'tutorial'
    ]
  }).then((data) => {
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
  comment.findAll({
    include:[
      'tutorial'
    ]
  }).then((data) => {
    if(data.length > 0){
      rs(res, data);
    }else{
      re(res, e_get_all);
    }
  }).catch((err) => {
    re(res, err);
  });
};

self.search = (req, res) => {
  let text = req.query.text;
  comment.findAll({
    include:[
      'tutorial'
    ],
    where:{
      text:{
        [Op.like]:`%${text}%`
      }
    }
  }).then((data) => {
    if(data.length>0){
      rs(res, data);
    }else{
      re(res, e_search);
    }
  }).catch((err) => {
    re(res, err);
  });
};

self.save = (req, res) => {
  comment.create(req.body)
    .then((data) => {
      if(data){
        rs(res, data);
      }
    }).catch((err) => {
      re(res, err);
    })
};

self.update = (req, res) => {
  let id = req.params.commentId;
  comment.update(req.body, {
    where:{
      id:id
    }
  }).then((data) => {
    if(data[0]){
      rs(res, data);
    }else{
      re(res, e_get_id);
    }
  }).catch((err) => {
    re(res, err);
  });
};

self.delete = (req, res) => {
  let id = req.params.commentId;
  comment.destroy({
    where:{
      id:id
    }
  }).then((data) => {
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