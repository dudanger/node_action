const assert = require('assert');
const greet = require('./index');

// 测试用例
assert.strictEqual(greet('Node'), 'Hello, Node!');
assert.strictEqual(greet(''), 'Hello, !');

console.log('✅ 所有测试通过！');
