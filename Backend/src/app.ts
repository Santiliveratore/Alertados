import 'reflect-metadata'
import express from 'express'
import {orm} from './shared/db/orm.js'
import { RequestContext } from '@mikro-orm/core'

const app = express()

app.use((req,res,next)=>{
    RequestContext.create(orm.em, next)
  })

app.use('/',(req, res)=>{
    res.send('Hello!!!')
})

app.listen(3000,()=>{
    console.log('Server running on http://localhost:3000/')
})