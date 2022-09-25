//1 Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button
$('button').click(() => {
    let element0 = document.createElement("h1");
    element0.innerText = 'MERN Stack';
    document.querySelector('.first').appendChild(element0);

})

//2 Write code to get 1st H1 element from a webpage using DOM.

let element1 = document.getElementsByTagName('h1')[0]; // first heading

console.log(element1);

//3 Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

setInterval(() => {
    let t = new Date();
    document.getElementById('hrs').innerText = t.getHours();
    document.getElementById('min').innerText = t.getMinutes();
    document.getElementById('sec').innerText = t.getSeconds();
    // console.log(t.getHours);
}, 500)

//4

function changeText() {
    document.querySelector('h1').innerText = "Welcome to Elevation Acacdemy!";
}
