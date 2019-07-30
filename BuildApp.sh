touch .babelrc
echo '{
  "presets" : ["@babel/preset-env", "@babel/preset-react"]
}' > ./.babelrc
webpack-cli --entry  "./src/App.js"  --output-filename="App.bundle.js"