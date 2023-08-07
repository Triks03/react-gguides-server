const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const characterRouter = require('./routes/character.routes')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(path.join(__dirname, 'static')))
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}))
app.use('/api', characterRouter)

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, `static`, '1a986272-6531-4ef9-a9ae-f3b144cd09d7.jpg'))
// });

const startApp = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

startApp();

