let msg = `FAT`;
let inp = `._13NKt.copyable-text.selectable-text[data-tab="9"]`;
let btn = "._4sWnG";
let times = "500";
let interval = 500;



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