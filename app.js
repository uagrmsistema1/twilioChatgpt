const TWILIO_ID = 'AC97e02e7e3f5350c51bb458ad9cd4b2a4'
const TWILIO_SK = '0f9d415100f66f510b1ffde9f529c999'


const client = require('twilio')(TWILIO_ID, TWILIO_SK)

client.messages
      .create({

         from: 'whatsapp:+14155238886',
         body: 'Hola a todos',
         to: 'whatsapp:+59172615354'
       })
      .then(message => console.log(message.sid));




/*const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

const port=3000

app.listen(port, () => {
    console.log(`App lista por el puerto:${port}`)
})*/