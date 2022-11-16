import AdminJS from 'adminjs'
import { Database, Resource } from '@adminjs/typeorm'

const mongooseDb = await mongoose.connect('mongodb://localhost:27017/adminjs', {
    databases: [mongooseDb],
})

