const assert = require('assert');
const fs = require('fs');

let passed = true;
let testResults = [];

// 测试用例 1
try {
  assert.strictEqual(1 + 1, 2);
  console.log('✅ 测试1通过: 1+1=2');
  testResults.push({ name: '加法测试', status: 'passed' });
} catch (e) {
  passed = false;
  console.error('❌ 测试1失败: 1+1 不等于2');
  testResults.push({ name: '加法测试', status: 'failed', error: e.message });
}

// 测试用例 2（再加一个简单的）
try {
  assert.strictEqual('hello'.length, 5);
  console.log('✅ 测试2通过: hello长度=5');
  testResults.push({ name: '字符串长度测试', status: 'passed' });
} catch (e) {
  passed = false;
  console.error('❌ 测试2失败');
  testResults.push({ name: '字符串长度测试', status: 'failed', error: e.message });
}

// 生成报告文件
const report = {
  success: passed,
  timestamp: new Date().toISOString(),
  results: testResults,
  summary: {
    total: testResults.length,
    passed: testResults.filter(r => r.status === 'passed').length,
    failed: testResults.filter(r => r.status === 'failed').length
  }
};

fs.writeFileSync('test-results.json', JSON.stringify(report, null, 2));
console.log('📊 测试报告已生成: test-results.json');

if (!passed) process.exit(1);
