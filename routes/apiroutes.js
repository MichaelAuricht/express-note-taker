const router = require('express').Router()
const store = require('../db/store')

// Get /api/notes responds with all notes from databas
router.get('/notes', (req,res) => { 
    store
        .getNotes()
        .then((notes) => {
            return res.json(notes)
        })
        .catch((err) => res.status(500).json(err))
})