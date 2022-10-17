const path = require('path');

module.exports = { 
  "mode": "development", 
  "entry": "./src/index.js", 
  "output": { 
    "path": __dirname + '/dist', 
    "filename": "bundle.js" 
  },
  devServer: { 
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 9000,
  }
}