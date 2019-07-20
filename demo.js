const Schduler = require('./index.js');
// 测试数据
const test = [1, 2, 3];
const apiTest = (val) => {
	return new Promise(resolve => {
			setTimeout(() => {
				resolve(val * val);
			}, [(4-val)*1000])	
		});
}

// demo
const apiXhr = async() => {
	const memo = Schduler(apiTest);
	test.forEach(async(val) => {
		// const res = await apiTest(val, 'x', 'y');
		// 9 4 1
		const res = await memo(val, 'x', 'y');
		console.log(res);
		// 1 4 9
	})
}
apiXhr();