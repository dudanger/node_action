// 一个简单的函数
function greet(name) {
    return `Hello, ${name}!`;
}

// 如果直接运行此文件，输出问候
if (require.main === module) {
    console.log(greet('World'));
}

module.exports = greet;
 
