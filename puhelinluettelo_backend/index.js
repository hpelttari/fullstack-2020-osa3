require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./models/person')

let persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    }
]


app.use(cors())
app.use(express.json()) 
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(express.static('build'))

morgan.token('body', function getBody(req) {
    if(req.method === "POST"){
        return JSON.stringify(req.body)        
    } else {
        return ' '
    }
})

const generateId = () => {
  return Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }
  if (!body.number) {
    return response.status(400).json({ 
      error: 'number missing' 
    })
  }

  if (persons.some(person => person.name == body.name)) {
    return response.status(400).json({ 
      error: 'name must be unique' 
    })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
    date: new Date(),
    id: generateId(),
  })

    person.save().then(savedPerson =>{
        response.json(savedPerson)
    })

})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person =>{
        response.json(person)
    })
})


app.get('/info', (req, res) => {
    const time = new Date(Date.now())
    const nPersons = persons.length
    const info = `<p>Phonebook has info for ${nPersons} people</p>
    <p>${time}</p>`
    res.send(info)
})

app.get('/api/persons', (req, res) => {
    Person.find({}).then(people => {
        res.json(people)
        
    })
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
