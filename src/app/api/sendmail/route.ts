import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { nombre, email, mensaje } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from:  process.env.EMAIL_FROM,
    to: `${email}, ${process.env.EMAIL_TO}`,
    subject: 'Gracias por contactarnos - Enterprise Solutions Apps',
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #3a7ebe;">Hola ${nombre},</h2>
        <p>Gracias por escribirnos. Hemos recibido tu mensaje:</p>
        <blockquote style="border-left: 4px solid #ccc; margin: 20px 0; padding-left: 10px;">
          ${mensaje}
        </blockquote>
        <p>Pronto nos pondremos en contacto contigo.</p>
        <br/>
        <p style="font-size: 14px; color: #888;">Enterprise Solutions Apps</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
   return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
  console.error('Error al enviar correo:', err);
  const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
  return new Response(JSON.stringify({ success: false, error: errorMessage }), { status: 500 });
}
}
