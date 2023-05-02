// https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645
import { NextApiRequest, NextApiResponse } from "next";


// interface Data {
//   type: string;
//   service: string;
//   name: string;
//   email: string;
//   tel: string;
//   message: string;
// }

export default function (
  req: NextApiRequest,
  res: NextApiResponse
) {
  require( 'dotenv' ).config()

  console.log( req.body )

  const type = req.body.type
  const service = req.body.service
  const name = req.body.name
  const email = req.body.email
  const tel = req.body.tel
  const message = req.body.message

  // console.log( `${ type }, ${ service }, ${ name }, ${ email }, ${ tel }, ${ message }` )

  const nodemailer = require( 'nodemailer' )
  const transporter = nodemailer.createTransport( {
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.contact_g_adress,
      pass: process.env.contact_g_password,
    },
    secure: true,
  } )

  const mailData = {
    from: process.env.contact_g_adress,
    to: process.env.contact_g_adress,
    subject: `${ name }様からのお問い合わせ。`,
    text: message + " | Sent from: " + email,
    html: `<div>${ message }${ service }${ tel }</div><p>Sent from:
    ${ email }</p>`
  }

  console.log( mailData )

  transporter.sendMail( mailData, function ( err: any, info: any ) {
    if ( err ) {
      console.log( "errです" );
      console.log( err );
    } else {
      console.log( "infoです" );
      console.log( info );
    }
  } )
  res.status( 200 )
}