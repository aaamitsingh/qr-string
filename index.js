'use strict';
const qr = require('qr-image');
const Datauri = require('datauri');
const getStream = require('get-stream');

const datauri = new Datauri();


const generateString = opts => {
    opts = Object.assign({
        message: ''
    }, opts);

    return `${opts.message}`;
};

module.exports = opts => {
    const str = generateString(opts);
    const stream = qr.image(str, {type: 'png'});

    return getStream.buffer(stream).then(data => datauri.format('.png', data).content);
};

module.exports.sync = opts => {
    return datauri.format('.png', qr.imageSync(generateString(opts), {type: 'png'})).content;
};

module.exports.generateString = generateString;
