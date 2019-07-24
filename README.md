## Quiz Game App
```
npm install
npm start 
```

## Guide to create bundle for plugin upload
To get a compatible bundle of a new app one wants to upload, the following must be done:
1. Move all three files to root of your plugin app, and provide the path of your entry point component at **webpack-cli --entry "/path/component.js"** inside the **BuildPlugin.sh** file.

2. Then run `sh BuildPlugin.sh` and on a successful compilation you should find your bundle in */dist* directory