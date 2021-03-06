const User = require('../../models/user');
const jwt = require('jsonwebtoken');

module.exports.index = (req, res) => {
  return res.status(200).json({
    success: true,
  });
};

// User signup function

module.exports.signUp = async (req, res) => {
  console.log('Hello everyone!!!!!!!!!!!!!!!!');
  console.log(req.body.data);

  let user = await User.findOne({ email: req.body.data.email });

  try {
    if (!user) {
      user = await User.create(req.body.data);

      if (user) {
        return res.status(201).json({
          message: 'User created successfully',
          name: user.name,
          email: user.email,
          id: user._id,
        });
      }

      return res.status(500).json({
        error: 'something went wrong!',
      });
    } else {
      return res.status(500).json({
        error: 'User alredy exists!',
      });
    }
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

// User login function

module.exports.login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.data.email });

    if (!user || user.password != req.body.data.password) {
      return res.status(401).json({
        error: 'Invalid email or password!',
      });
    }

    const payLoad = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    const jsonData = {
      token: jwt.sign(payLoad, 'secret', { expiresIn: '2 days' }),
      message: 'Sign in successfully!!',
      success: true,
    };

    return res.status(200).json(jsonData);
  } catch (err) {
    return res.status(401).json({
      error: err,
    });
  }
};

module.exports.google = async (req, res) => {
  
  return res.status(200).json({
    data: true,
  });
};
