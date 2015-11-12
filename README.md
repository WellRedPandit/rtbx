# Story

Originally submitted as https://github.com/react-toolbox/react-toolbox/issues/96 because webpack had failed

Fixed by https://github.com/nathanmarks

# What did not work and was fixed

## Run

```
npm install
webpack -d --colors --progress --config webpack.config.js
```

## Observe

```
Version: webpack 1.12.4
Time: 7842ms
               Asset     Size  Chunks             Chunk Names
    UnifiedSearch.js   694 kB       0  [emitted]  main
UnifiedSearch.js.map  1000 kB       0  [emitted]  main
    + 150 hidden modules

ERROR in ./~/react-toolbox/lib/button/index.js
Module build failed: ReferenceError: [BABEL] /tmp/rtbx/node_modules/react-toolbox/lib/button/index.js: Unknown option: /tmp/rtbx/node_modules/react-toolbox/.babelrc.stage
    at Logger.error (/tmp/rtbx/node_modules/babel-core/lib/transformation/file/logger.js:43:11)
    at OptionManager.mergeOptions (/tmp/rtbx/node_modules/babel-core/lib/transformation/file/options/option-manager.js:250:18)
    at OptionManager.addConfig (/tmp/rtbx/node_modules/babel-core/lib/transformation/file/options/option-manager.js:209:10)
    at OptionManager.findConfigs (/tmp/rtbx/node_modules/babel-core/lib/transformation/file/options/option-manager.js:352:16)
    at OptionManager.init (/tmp/rtbx/node_modules/babel-core/lib/transformation/file/options/option-manager.js:396:12)
    at File.initOptions (/tmp/rtbx/node_modules/babel-core/lib/transformation/file/index.js:191:75)
    at new File (/tmp/rtbx/node_modules/babel-core/lib/transformation/file/index.js:122:22)
    at Pipeline.transform (/tmp/rtbx/node_modules/babel-core/lib/transformation/pipeline.js:42:16)
    at transpile (/tmp/rtbx/node_modules/babel-loader/index.js:14:22)
    at Object.module.exports (/tmp/rtbx/node_modules/babel-loader/index.js:83:14)
 @ ./app/scripts/components/App.jsx 7:14-49
```

## Comment

webpack finishes successfully

```
Hash: 10db885cf6db15b2df5e
Version: webpack 1.12.4
Time: 8072ms
               Asset     Size  Chunks             Chunk Names
    UnifiedSearch.js   694 kB       0  [emitted]  main
UnifiedSearch.js.map  1000 kB       0  [emitted]  main
    + 149 hidden modules
```

if the two react-toolbox related lines

```
line 4: import Button from 'react-toolbox/lib/button';
line 12: <Button label="Hello world" kind="raised" accent />
```

are modified such

```
line 4: // import Button from 'react-toolbox/lib/button';
line 12: <div label="Hello world" kind="raised" accent />
```
