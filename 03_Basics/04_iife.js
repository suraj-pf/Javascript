// Immediately Invoked Function Expression IIFE

// IIFE means the code is excuted as soon as it is made in oder to avoid pollution from gloabal variables

(function chai() {
    console.log("Hi,Team")
})(); // semi colon is imp

( () => {
    console.log("Hi,Team")
})();

( () => ( console.log(`Hi, Team!`) ))();

( () => {
    console.log(`Hi, Team!`)
})();

( (name) => ( console.log(`Hi,${name}`) ))("suraj");

( (name) => {
    console.log(`Hi,${name}`)
})("suraj");