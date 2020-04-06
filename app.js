const http = require('http')

require('./model/connect.js')

const dataformat = require('dataformat')
const router = require('./router/index')

const template = require('art-template')
const path = require('path')

// 模板 配置根目录
template.defaults.root = path.join(__dirname, 'views')
    // 配置模板默认后缀
template.defaults.extname = '.art'

template.defaults.imports.dataformat = dataformat

// 配置静态资源
// 引入静态资源访问模块
const serveStatic = require('serve-static');
// 实现静态资源访问服务
const serve = serveStatic(path.join(__dirname, 'public'))

const app = http.createServer()
app.on('request', (req, res) => {
    // 启动路由
    router(req, res, () => {})
    serve(req, res, () => {})
})

app.listen(3000)
console.log('服务器启动成功')