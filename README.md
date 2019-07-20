# apply-schdule-sync
异步api返回按请求顺序同步器

```
// apiTest(1), wait 3s
// apiTest(2), wait 2s
// apiTest(3), wait 1s

// common
test.forEach(async(val) => {
    const res = await apiTest(val);
    // order 3 -> 2 -> 1
})

// add sync
const memo = Schduler(apiTest);
test.forEach(async(val) => {
    const res = await memo(val, 'x', 'y');
    // order 1 -> 2 -> 3
})