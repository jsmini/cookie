var pkg = require('../package.json');

// 兼容 cookie 和 @jsmini/cookie，@jsmini/cookie 替换为 jsmini_cookie
var name = pkg.name.replace('@', '').replace(/\//g, '_');
var version = pkg.version;

var banner = 
`/*!
 * cookie ${version} (https://github.com/jsmini/cookie)
 * API https://github.com/jsmini/cookie/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} jsmini. All Rights Reserved
 * Licensed under MIT (https://github.com/jsmini/cookie/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
