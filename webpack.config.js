const path=require("path")

module.exports={
    entry:"./src/index.js",
    output:{
        filename:"module.js",
        path:path.resolve(__dirname,"./dist"),
        publicPath:"dist/"
    },
    mode:"none",
    module:{
        rules:[
            {
                test:/\.(png|jpg)$/,
                type:"asset",
                parser:{
                    dataUrlCondition:{
                        maxSize:3*1024 // 3 kb
                    }
                }
            },
            {
                test:/\.txt/,
                type:"asset/source"
            }
        ]
    }
}