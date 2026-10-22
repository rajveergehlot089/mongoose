const express = require('express')
const { create, view, update, changeStatus, destroy } = require('../../controllers/admin/default.controller')

const route =express.Router()

module.exports =server =>{

    route.get('/create',create)

    route.post('/view',view)

    route.put('/update/:id',update)

    route.post('/details/:id',details)

    route.get('/change-status',changeStatus)

    route.get('/destroy',destroy)



    server.use('/api/admin/category',route)
}