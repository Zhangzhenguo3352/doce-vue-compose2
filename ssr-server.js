const express = require('express')
const path = require('path');
const fs = require('fs')

const { createBundleRenderer } = require('vue-server-renderer')
const createApp = require('./dist/bundle.server.js')['default']

const app = express();

const handleRequest = (req, res) => {
    let content = fs.readFileSync(path.resolve(__dirname, "./dist/vue-ssr-client-manifest.json"), "utf-8")
    console.log('content', content)

    // 生成模板
    const renderer = createBundleRenderer(content, {
        runInNewContext: false,
        template: fs.readFileSync(path.resolve(__dirname, "./src/index.temp.html"), "utf-8"),
        clientManifest: content
    });
    res.send(renderer)
}

app.get('*', handleRequest)

app.listen(3000, () => {
    console.log(3000)
})