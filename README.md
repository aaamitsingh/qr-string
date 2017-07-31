> Generate a string that's used to create the QR code.
Based on gillstrom/swish-qr.


## Install

```
$ npm install string-qr-string
```


## Example

```js
const qrString = require('qr-string');

qrString({
	message: 'Lorem ipsum'
}).then(result => {
	console.log(result); // 'data:image/png;base64,nvljfvnfjvlsdfkjvllkkllsdfk...'
});
```



