import express from 'express'

import propertyEndpoints from './endpoints/propertyEndpoints'

const router = express.Router()

router.get('/properties', propertyEndpoints.fetchProperties)

export default router
