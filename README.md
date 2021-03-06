> Generate a string that's used to create the QR code.
Based on gillstrom/swish-qr.


## Install

```
$ npm install qr-string
```


## Example 1 : Return a Promise resolving into a BASE64 string format.

```js
const qrString = require('qr-string');

qrString({
		message: 'Lorem ipsum'
	}).then(result => {
		console.log(result);
});
```

## Example 2 : Return BASE64 string using sync method.

```js
const qrString = require('qr-string');

var qrMessage = {message: 'Lorem ipsum'}
var result = qrString.sync(qrMessage);
console.log(result);
```

## Example 3 : Return a formatted string that used to create QR code.

```js
const qrString = require('qr-string');

var qrMessage = {message: 'Lorem ipsum'}
var result = qrString.generateString(qrMessage);
console.log(result);
```
