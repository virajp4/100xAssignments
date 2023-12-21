// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const bearer = req.header.Authorization;
  if (bearer === 'Bearer'){
    next();
  }
  else {
    res.status(403).json({message: 'Forbidden'});
  }
}

module.exports = adminMiddleware;
