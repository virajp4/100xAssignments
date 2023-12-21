function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const bearer = req.header.Authorization;
  if (bearer === "Bearer") {
    next();
  } else {
    res.status(403).json({ message: "Forbidden" });
  }
}

module.exports = userMiddleware;
