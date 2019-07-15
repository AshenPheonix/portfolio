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
            },{
                test:/\.less$/,
                exclude:/node_modules/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'less-loader'}
                ]
            }
        ]
    },
    entry: {
        project:'./js/projectInject.js',
        blog:'./js/blogInject.js',
        index:'./js/index.js'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    stats:{colors:true}
}