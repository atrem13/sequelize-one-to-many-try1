const re = (res, err) => {
  let error;
  let status = 404;
  if(err == 'get id' || err == 'search'){
    error = 'data doesnt exist' 
  }else if(err == 'get all'){
    error = 'data empty';
  }else {
    error = err;
    status = 500;
  }

  return res.status(500).json({
    status:'error',
    error:error
  });
};

module.exports = re;