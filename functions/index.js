
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Configuración del transporte para Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail", // Cambia esto si usas otro servicio de correo
  auth: {
    user: "tu-correo@gmail.com", // Reemplaza con tu correo
    pass: "tu-contraseña-o-token-de-aplicación", // Reemplaza con tu contraseña o token de aplicación
  },
});

// Función para enviar correo de verificación personalizado
exports.sendVerificationEmail = functions.https.onRequest(async (req, res) => {
  // Leer datos de la solicitud
  const { email, password, verificationLink } = req.body;

  if (!email || !password || !verificationLink) {
    res.status(400).send("Faltan datos necesarios: email, password o verificationLink.");
    return;
  }

  // Opciones del correo
  const mailOptions = {
    from: "AutoAsiste Bolivia <tu-correo@gmail.com>",
    to: email,
    subject: "Verificación de correo - AutoAsiste Bolivia",
    html: `
      <p>Hola,</p>
      <p>Te habla el administrador de AutoAsiste Bolivia.</p>
      <p>Tu correo es: <strong>${email}</strong></p>
      <p>Tu contraseña es: <strong>${password}</strong></p>
      <p>Por favor, verifica tu correo electrónico haciendo clic en el siguiente enlace:</p>
      <p><a href="${verificationLink}">Verificar correo</a></p>
      <p>Si no solicitaste la verificación de esta dirección, ignora este correo electrónico.</p>
      <p>Gracias,</p>
      <p>Equipo de AutoAsiste Bolivia</p>
    `,
  };

  try {
    // Enviar el correo
    await transporter.sendMail(mailOptions);
    res.status(200).send("Correo de verificación enviado con éxito.");
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).send("Error al enviar el correo.");
  }
});
