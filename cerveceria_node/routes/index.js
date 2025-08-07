var express = require('express');
var router = express.Router();

var nodemailer = require("nodemailer")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', async (req, res, next) => {

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.telefono;
  var mensaje = req.body.mensaje;


console.log(req.body)

var obj= {
  to: 'lulym329@gmail.com',
  subject: 'Contacto desde la Web',
  html: nombre + '' '' + apellido + "se contacto y quiere mas info por" + email <br> "Ademas hizo el siguiente comentario:" + mensaje + ''. "Su tel es" + telefono 

}

var transporter = nodemailer {{
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: (
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
)
}}

var info = await transporter.sendMail(obj);

res.render('index', {
  message: 'Mensaje enviado correctamente',
});

}) //cierra peticion POST




module.exports = router;
