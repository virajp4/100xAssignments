const { User } = require('../db/index');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const {username, password} = req.headers;
    const verUser = User.findOne({username, password});

    if (verUser){
        next();
    }
    else{
        res.json({message: "User not found"});
    }
}

module.exports = userMiddleware;