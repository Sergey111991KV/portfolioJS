//Console.log div
//Create show console.log div
(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();

//Create clear console.log button
(function () {
    var loggerClear = document.getElementById('log-clear');
    var logger = document.getElementById('log');
    loggerClear.addEventListener('click', () => {
        logger.innerHTML = ''
    })
})();

console.log("hi! it's console message)")
