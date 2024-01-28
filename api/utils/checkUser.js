import jwt from "jsonwebtoken";

// ? This function is used to get the user info from the token
export const checkUser = (req) => {
   const token = req.cookies.access_token;
   if (!token) return;

   return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
         if (err) {
            console.log(err);
            reject(err);
         } else {
            resolve(user);
         }
      });
   });
};
