const express = require('express');
  
let router = express.Router();



router.post('/', (req, res) => {// creamos un servicio post para enviar  datosen este caso correo

  var nodemailer = require('nodemailer');  // accede a la libreria creada de nodemailer

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {//autentificación de nuestro correo 
      user: 'mardespat@gmail.com',
      pass: '0066pizixu'
    }
  });
  var mailOptions = { //coge el correo de nuestra pagina
    from: 'contactar@gmail.com',
    to: 'maria.paterna@gmail.com',
    subject: req.body.asunto, // es el cuerpo de nuestra body
     text: req.body.nombre + ' ' + req.body.comenta,
    html: "<h1>" + req.body.nombre + "</h1>" + "<br>" + req.body.comenta 

  };


  transporter.sendMail(mailOptions, function(error, info){ //para enviar el correo
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});
module.exports = router;