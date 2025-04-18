import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookie.token;
    if(!token) return res.status(401).json({message: "Not Authenticated!"});

    jwt.verify(token, process.env.JWT_SECRET, async (err, paylod) => {
        if(err) return res.status(403).json({ message: "Token is not Valid!" });
        req.userId = paylod.id;
        next();
    });


}