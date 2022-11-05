const spread_textarea = document.getElementById('spread_textarea')
const spread__object = document.getElementById('spread__object')

let inside_object

// console.log(spread_textarea)
// console.log(spread__object)

spread_textarea.addEventListener(('input'), function (event) {
    console.log(spread_textarea.value)
    inside_object = JSON.parse(spread_textarea.value)
    console.log(inside_object)
    if (typeof inside_object === "object" ) {
        spread__object.innerText = spread_textarea.value
    }
})


// "{name: 'Artem'}"
