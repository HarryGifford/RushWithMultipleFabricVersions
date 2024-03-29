//@ts-check
/** @type { import("path") } */
const path = require("path");

const isEnvDevelopment = process.env.NODE_ENV !== "production";

/** @type { import("webpack").Configuration } */
module.exports = {
    entry: "./src/index.tsx",
    devtool: isEnvDevelopment ? "eval-source-map" : "source-map",
    devServer: {
        open: true,
        contentBase: ["dist"],
        port: 3000,
        overlay: true
    },
    mode: isEnvDevelopment ? "development" : "production",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                include: /src/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};
