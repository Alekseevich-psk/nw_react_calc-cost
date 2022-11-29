const paths = require('react-scripts/config/paths')
const path = require('path')

paths.appSrc = path.resolve(__dirname, 'app')
paths.appIndexJs = path.resolve(__dirname, 'app/index.js')

paths.appPublic = path.resolve(__dirname, 'dist')
paths.appHtml = path.resolve(__dirname, 'dist/index.html')