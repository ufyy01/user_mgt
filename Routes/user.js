const express = require('express')
const router = express.Router()
const { loginForm, registerUser, regForm, loginUser, editUser, updateUser, deleteUser, adminView } = require('../Controller/user')
const requireAuth = require('../Middleware/auth')

router.get('/', loginForm)
router.post('/', loginUser)

router.get('/register', regForm)
router.post('/register', registerUser)

router.get('/dash', requireAuth, adminView)

router.get('/update/:id', requireAuth, editUser)
router.post('/update/:id', requireAuth, updateUser)

router.get('/delete/:id', requireAuth, deleteUser)

module.exports = router