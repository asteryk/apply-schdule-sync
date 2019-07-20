
// 同步器
const Schduler = (func) => {
	const queue = [];
	let pending = false;
	const dealWithReturn = async(func, args, resolve) =>{
		const res = await func(...args);
		resolve(res);
		const top = queue.shift();
		if(top){ 
			dealWithReturn(top.func, top.args, top.resolve);
		} else {
			pending = false;
		}
	}
	return new Proxy(func, {
		apply: (target, obj, args) => {
			return new Promise(async(resolve) => {
				if(pending == true){
					queue.push({ func, args, resolve });
				} else {
					pending = true;
					dealWithReturn(func, args, resolve);
				}
			})
		}

	});
}

module.exports = Schduler;

