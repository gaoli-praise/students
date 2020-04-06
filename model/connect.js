var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground')
    .then((data) => {
        console.log('数据库连接成功')
    })
    .catch((data) => {
        console.log('数据库连接失败')
    })