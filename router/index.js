const getRouter = require('router')
const router = getRouter()

const Studens = require('../model/user.js')

const template = require('art-template')
const path = require('path')

const queryString = require('querystring')

router.get('/list', async(req, res) => {
    let student = await Studens.find()
        // 响应list页面
    let html = template('list', {
        student: student
    })
    res.end(html)
})
router.get('/add', (req, res) => {
    let html = template('index', {})
    res.end(html)
})
router.post('/add', (req, res) => {
    let formData = "";
    req.on('data', param => {
        formData += param;
    })
    req.on('end', async() => {
        await Studens.create(queryString.parse(formData))
        res.writeHead(301, {
            Location: '/list'
        })
        res.end()
    })

})

module.exports = router