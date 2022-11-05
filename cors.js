// console.log('cors js file is added')
// var firstStepEmpty = document.getElementById('cors_content_first_step_empty');
// var firstStepCors = document.getElementById('cors_content_first_step_cors');
// var firstStepNoCors = document.getElementById('cors_content_first_step_no-cors');
//
//
// // fetch('https://ipinfo.io/json?token=29e18b8a0ccc9d', )
// //     .then((response) => {
// //         console.log('cors', response);
// //         return response;
// //     })
// //     .then((data) => {
// //         firstStepEmpty.innerHTML += data.type + ' ' + data.status;
// //         console.log(data);
// //     })
// //     .catch((error) => {
// //         firstStepEmpty.innerHTML += error;
// //         console.log(error)
// //     })
//
// // fetch('https://ipinfo.io/json', {
// //     mode: 'no-cors'
// // })
// //     .then((response) => {
// //         console.log('cors', response);
// //         return response;
// //     })
// //     .then((data) => {
// //         firstStepCors.innerHTML += data.type + ' ' + data.status;
// //         console.log(data);
// //     })
// //     .catch((error) => {
// //         firstStepCors.innerHTML += error;
// //         console.log(error)
// //     })
// //
// fetch('https://ipinfo.io/json?token=29e18b8a0ccc9d', {
//     mode: 'cors'
// })
//     .then((response) => {
//         console.log('cors', response);
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         firstStepNoCors.innerHTML += data.city + ' ' + data.hostname;
//     })
//     .catch((error) => {
//         firstStepNoCors.innerHTML += error;
//         console.log(error)
//     })
//
// // 1. Объявить функцию для обработки погодных данных
// function gotWeather({ temperature, humidity }) {
//     alert(`температура: ${temperature}, влажность: ${humidity}`);
// }
//
// let script = document.createElement('script');
// script.src = `https://ipinfo.io/json?token=29e18b8a0ccc9d`;
// document.body.append(script);
