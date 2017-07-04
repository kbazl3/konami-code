const sectretUnicornCode = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightabEnter";

let pressed = [];
var num = "aaaaaaaaaaa".length;

window.addEventListener('keydown', function(e) {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-11 - 1, pressed.length - 11);
    if (pressed.join('') === sectretUnicornCode) {
        cornify_add();
    }
    console.log(pressed.join(''));
});
