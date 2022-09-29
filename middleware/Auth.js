const auth = (req, res, next) =>{
    console.log("middelware");
    next();
}

const adminCheck = (req, res, next) =>{
    console.log("middelware");
    next();
}

module.exports = {auth, adminCheck}