module.exports = (req, res, next) => {
    let admin = ["Ada", "Greta", "Vim", "Tim"];
    if (admin.includes(req.body.name)) {
          res.send("Hola Admin:"+req.body.name);
    } else {
          res.send("No tienes podes ingresar");
    }
};