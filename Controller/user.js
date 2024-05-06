const User = require('../models/user')
const bcrypt = require('bcrypt');

//render pages
const loginForm = async (req, res) => {
    await res.render('home')
}
const regForm = async (req, res) => {
    await res.render('register')
}


//Logic
const registerUser = async (req, res) => {
    try{
        const { username, email, password, confirmPass, phone, role } = req.body;

        if (!(username && password && email && phone && confirmPass && role)) {
            throw new Error("Please enter all information")
        }

        const userRegistered = await User.findOne({
            where: {
                username: username,
                email: email 
            }
        })
        if (userRegistered) {
            throw new Error("User already exists!")
        }

        if (password !== confirmPass) {
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        await User.create({
            username,
            email,
            password: hashedPassword,
            phone,
            role
        });

        res.redirect('/')
    }
    catch(error) {
        res.status(400).send(error.message); 
    }
}

const loginUser = async (req, res) => {
    try{
        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email: email 
            }
        })
        if (!user) {
            throw new Error("user not found")
        }

        const auth = await bcrypt.compare(password, user.password)

        if (!auth) {
            throw new Error("Incorrect Password")
        }

        const userData = {
            id: user.id,
            username: user.username,
            email: user.email,
            phone: user.phone,
            role: user.role
        };

        req.session = user.username

        if(user.role !== "admin") {
            res.render('user', { userData })
        }

        if(user.role === "admin") {
            res.redirect('/dash')
        }
        
    }
    catch(error) {
        res.status(400).send(error.message); 
    }
}

const editUser = async (req, res) => {
    try {
        const { id } = req.params;
    
        const user = await User.findOne({
            where : {
                id: id
            }
        })
        if (!user) {
            throw new Error("invaild user")
        }
        const userData = {
            id: user.id,
            username: user.username,
            email: user.email,
            phone: user.phone,
        };

        res.render('update', { userData })
    }
    catch(error) {
        res.status(400).send(error.message); 
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, phone, role } = req.body;
    
        const user = await User.findByPk(id)
        if (!user) {
            throw new Error("invaild user")
        }

        user.username = username;
        user.email = email;
        user.phone = phone;
        user.role = role;

        await user.save();

        res.redirect('/')
    }
    catch (error) {
        res.status(400).send(error.message); 
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
    
        const user = await User.findByPk(id)
        if (!user) {
            throw new Error("invaild user")
        }

        await user.destroy();

        res.redirect('/')
    }
    catch(error) {
        res.status(400).send(error.message); 
    }
}

const adminView = async (req, res) => {
    try{
        const users =  await User.findAll({
            raw: true
        })
        if (!users) {
            throw new Error("Can't fetch users, please try again")
        }

        res.render('dash', { users })
    }
    catch(error) {
        res.status(400).send(error.message); 
    }
}

module.exports = {
    loginForm,
    regForm,
    registerUser,
    loginUser,
    editUser,
    updateUser,
    deleteUser,
    adminView
}