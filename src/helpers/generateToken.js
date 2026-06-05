const jwt = require('jsonwebtoken');

const assignJWT = (user) => {
    return jwt.sign(
        {
            id: user.userId,
            email: user.email,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES
        }
    );
};

module.exports = assignJWT;