# Loug

Console for debugging messages, errors and warnings in projects that are in development.

## Installation
```bash
$ npm install --save loug
```

Add the `production` key in your `package.json`.
```js
{
  "name": "testing",
  "version": "3.2.1",
  "description": "description testing",
  "main": "index.js",
  "scripts": {
  },
  "keywords": [
  ],
  "dependencies": {
  },
  "production": false    //=> This key
}
```

The key `production` is boolean type, `true` is production.

When the key is set to `true` the messages are not displayed. The opposite happens when it is `false`.

## Usage
`"production": false`
```js
var loug = require('loug');

loug("Hello")
//=> Hello
loug.warn("an advert")
//=> an advert
loug.ignore("Any argument or message")
//=> Any argument or message
```

`"production": true`
```js
var loug = require('loug');

loug("Hello")
loug.warn("an advert")
loug.ignore("Any argument or message")
//=> Any argument or message
```

## API

### **log(msg...)**
Logs the message as if you called `console.log`

### **error(msg...)**
Logs the message as if you called `console.error`

### **warn(msg...)**
Logs the message as if you called `console.warn`

### **info(msg...)**
Logs the message as if you called `console.info`

### **dir(msg...)**
Logs the message as if you called `console.dir`

### **ignore(msg...)**
Logs the message as if you called `console.log`. Logs the message in production and development.


### **Ignore all**
Ignore the `production` key and enable log, error, warn, dir and info. Only applies to the current document.

```js
var loug = require('loug');

loug.set(true);
```

### LICENCE
MIT