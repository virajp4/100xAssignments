// Middleware for handling auth
const { Admin } = require("../db/index");

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const {username, password} = req.headers;
    const verAdmin = Admin.findOne({username, password});

    if (verAdmin){
        next();
    }
    else{
        res.json({message: "Admin not found"});
    }
}

module.exports = adminMiddleware;