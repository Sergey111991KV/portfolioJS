console.log('cors js file is added')
var firstStepEmpty = document.getElementById('cors_content_first_step_empty');
var firstStepCors = document.getElementById('cors_content_first_step_cors');
var firstStepNoCors = document.getElementById('cors_content_first_step_no-cors');


fetch('https://ipinfo.io', )
    .then((response) => {
        console.log('cors', response);
        return response;
    })
    .then((data) => {
        firstStepEmpty.innerHTML += data.type + ' ' + data.status;
        console.log(data);
    })
    .catch((error) => {
        firstStepEmpty.innerHTML += error;
        console.log(error)
    })

fetch('https://ipinfo.io', {
    mode: 'no-cors'
})
    .then((response) => {
        console.log('cors', response);
        return response;
    })
    .then((data) => {
        firstStepCors.innerHTML += data.type + ' ' + data.status;
        console.log(data);
    })
    .catch((error) => {
        firstStepCors.innerHTML += error;
        console.log(error)
    })

fetch('https://ipinfo.io', {
    mode: 'cors'
})
    .then((response) => {
        console.log('cors', response);
        return response;
    })
    .then((data) => {
        firstStepNoCors.innerHTML += data.type + ' ' + data.status;
        console.log(data);
    })
    .catch((error) => {
        firstStepNoCors.innerHTML += error;
        console.log(error)
    })

