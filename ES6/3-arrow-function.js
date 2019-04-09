let add = (n1, n2) => (n1 + n2);

let add2 = (n1, n2) => {
    return n1 + n2;
};

setTimeout(() => {
    console.log("setTimeout-1000")
}, 1000);

//==
let show = (msg = "default") => {
    console.log(msg)
};

show("Hello");
show();

//==
let multiply = (n1, n2) => (n1 * n2);

multiply(3, 4);

function combine(first = "Jedi", last = "Wang", name = first + " " + last) {
    console.log(name)
};

combine();

console.log("3------------end")
