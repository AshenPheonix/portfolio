const path = require('path')

module.exports = {
    module:{
        rules:[
            {
                test:/\.riot$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader: '@riotjs/webpack-loader',
                        options:{
                            hot:false
                        }
                    }
                ]
            }
        ]
    },
    entry: {
        project:'./js/projectInject.js',
        blog:'./js/blogInject.js'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'views')
    },
    mode:"development"
}