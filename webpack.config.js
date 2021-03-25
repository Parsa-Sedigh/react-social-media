const path = require("path")

module.exports = {
    entry: "./app/Main.jsx", // in original file, this was Main.js not Main.jsx
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "app"),
        filename: "bundled.js"
    },
    mode: "development",
    devtool: "source-map",
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, "app"),
        hot: true,
        historyApiFallback: { index: "index.html" }
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/, // in original config, this was js, not (jsx|js)
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-react",
                            ["@babel/preset-env", { targets: { node: "12" } }]
                        ]
                    }
                }
            }
        ]
    }
}
