let msg = `FAT`; // Write your message here! This could be a DOM element also!
let times = "500"; // Number of messages you want to send
let interval = 500; // Set the interval between your messages

/* 
# Change the below selectors according to your DOM.
# 'inp' variable should be the Contenteditable div that stores your input 
# 'btn' variable should be the button that appear on keypress event 

*/
let inp = `._13NKt.copyable-text.selectable-text[data-tab="9"]`;
let btn = "._4sWnG";



const festo = (msg, inpSelector, btnSelector) => {

    var evt = new InputEvent('input', {
        bubbles: true
    });
    document.querySelector(inpSelector).innerHTML = msg;
    document.querySelector(inpSelector).dispatchEvent(evt);
    document.querySelector(btnSelector).click();
}

let i = 0;
let tep = setInterval(() => {
    festo(msg, inp, btn);
    console.log(`Message sent ${i} times`);
    i++;
    if (i > times) {
        console.log("FINISHED")
        clearInterval(tep);
        i = 0;
    }
}, interval);