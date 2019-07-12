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
    entry: './js/projectInject.js',
    output:{
        filename:'project.js',
        path:path.resolve(__dirname,'views')
    },
    mode:"development"
}