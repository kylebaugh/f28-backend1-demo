// Import server/express/cors code

const express = require('express')
const cors = require('cors') // Cross Origin Resource Sharing

// Invoke express and save it to a variable called app
const app = express()


// Set up Middleware - External code you want to run every time your server starts

app.use(express.json()) // Allows server to accept JSON objects
app.use(cors()) // Allows server to active cors


// Create dummy database represented by an array

const dummyDatabase = ['chips', 'dip', 'Dr. Pepper', 'Mt. Dew', 'Red Vines', 'Sour Patch Watermelon', 'Sour Patch Original']

app.get('/api/inventory', (req, res) => 
    {
        if(req.query.item) {
            console.log('we passed our if-statement')

            const filteredItems = dummyDatabase.filter((food) => food.includes(req.query.item))

            res.status(200).send(filteredItems)
        }else {

            console.log('backend get request hit')
            res.status(200).send(dummyDatabase)
        }
        
    })

// Lets build a get request using a param

app.get('/api/inventory/:id', (req, res) => {
    console.log(req.params)

    // set up variable for that id property and convert to number

    let index = +req.params.id
    res.status(200).send(dummyDatabase[index])
})


// Open door to server
app.listen(5050, () =>{
    console.log('Server running on port 5050')
})