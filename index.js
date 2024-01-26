const express = require('express')
const app  = express()
const db = require('./models')

const { User } = require('./models')
console.log(JSON.stringify(User))

app.get('/select', (req,res) => {
    User.findAll()
    .then((users) => {
        res.send(users)
    }).catch((err) => {
        console.log(err)
    })
})

db.sequelize.sync().then((req) => {
    app.listen(3001, () => {
        console.log("successful")
    })
})