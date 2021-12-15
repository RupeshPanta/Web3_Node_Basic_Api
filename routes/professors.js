const { Router } = require('express')
const express = require('express')
const router = express.Router()
const Professor = require('../models/professor')

router.get('/', async(req,res) => {
    try{
           const professors = await Professor.find()
           res.json(professors)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const professor = await Professor.findById(req.params.id)
           res.json(professor)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const professor = new Professor({
        Name: req.body.Name,
        Subject: req.body.Subject,
        PHD: req.body.PHD
    })

    try{
        const a1 =  await professor.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const professor = await Professor.findById(req.params.id) 
        professor.PHD = req.body.PHD
        const a1 = await professor.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})


router.delete('/:id',async(req,res)=> {
    try{
        const professor = await Professor.findById(req.params.id) 
        const a1 = await professor.remove()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})


module.exports = router