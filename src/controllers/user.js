users = [
    {
      name: 'Asheesh',
      email: 'asheeshsingh0112@gmail.com'
    },
    {
      name: 'Vaibhav',
      email: 'vaibhav@gmail.com'
    }
]

const getUser = (req, res) => {
  res.json({ 
    message: 'User Details Fetched successfully', 
    name: 'Asheesh',
    email: 'asheeshsingh0112@gmail.com'
   });
};

const getUserByID = (req, res) => {
  if(req.query.isadmin === 'true'){
    if(req.params.id <= users.length - 1){
      res.json({ 
        message: 'User Details Fetched successfully', 
        userDetail: users[Number(req.params.id)]
      });
    }else{
      res.json({ 
      message: 'User not found', 
     })
    }
  }else{
    res.json({ 
      message: 'You are not admin', 
    })
  }
};

const getUserList = (req, res) => {
  if(req.query.isadmin === 'true'){
    res.json({ 
    message: 'User Details Fetched successfully', 
    userList: users
   });
  }else{
    res.json({ 
      message: 'You are not admin', 
    })
  }
};


module.exports = { getUser , getUserList, getUserByID};
