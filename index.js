function factorial(n) {
    return n != 1 ? n * factorial(n -1) : 1
}

const memoize = (fn) => {
    let cash = {}
    return (...arg) => {
        let n = arg[0]
        if (n in cash) {
            console.log('Fetching from cache');
            return cash[n]
        } else{
            console.log('Calculating result');
            let result = fn(n)
            cash[n] = result
            return  result
        }
    }
}

const add = (n) => (n + 10);
const memoizedAdd = memoize(add);
// console.log(memoizedAdd(3));  // вычислено
// console.log(memoizedAdd(3));  // взято из кэша


const factorialMemo = memoize(
    (x) => {
    if (x === 0) {
        return 1
    }
    else {
        return x * factorialMemo(x-1)
    }
})

factorialMemo(4)
factorialMemo(4)

factorialMemo(9)

//Useful Functions

//debounce
const debounce = (fn, ms) => {
    let timeout;
    return function () {
        const fnCall = () => {
            fn.apply(this, arguments)
        }
        clearTimeout(timeout)
        timeout = setTimeout(fnCall, ms)
    }
}

function onChange(e) {
    console.log(e.target.value)
}

document.getElementById('input_debounce').addEventListener('keyup', debounce(onChange, 500))
document.getElementById('input_not_debounce').addEventListener('keyup', onChange)


//throttle
function throttle(func,ms) {
    let isThrottle = false;
    let savedArgs;
    let savedThis;

    function wrapper() {
        console.log('action pre request')
        if (isThrottle) {
            savedArgs = arguments;
            savedThis = this;
            return
        }
        func.apply(this, arguments)
        isThrottle = true
        setTimeout(() => {
            isThrottle = false
            if (savedArgs && savedThis) {
                wrapper.apply(savedThis, savedArgs)
                savedArgs = savedThis = null
            }
        }, ms)
    }

    return wrapper
}


function testMouseThrottle () {
    console.log('Throttle apply function')
}

testMouseThrottle = throttle(testMouseThrottle, 2000)
let interval


document.getElementById('throttle_open').addEventListener('click',() => {
    interval = setInterval(testMouseThrottle, 100)
})
document.getElementById('throttle_open_without').addEventListener('click', () => {
    interval = setInterval(() => {
        console.log('action')
    }, 100)
})
document.getElementById('throttle_close').addEventListener('click', () => {
    clearInterval(interval)
})
