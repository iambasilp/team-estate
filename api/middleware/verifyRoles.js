import { errorHandler } from "../utils/error.js";

const verifyRoles = (...allowedRoles) => {
   return (req, res, next) => {
      if (!req.user) return next(errorHandler(401, "Unauthorized"));

      // ? if the user's role is not in the allowed roles array, return an error
      if (!allowedRoles.includes(req.user.role)) return next(errorHandler(403, "not allowed"));

      // ? if the user's role is in the allowed roles array, continue
      next();
   };
};

export default verifyRoles;
