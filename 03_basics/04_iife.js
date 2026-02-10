// Immediately Invoked Function Expressions (IIFE)

(function one(){
    // named IIFE
    console.log(`DB connected`);
    
})();

( (name) => {
    console.log(`DB Connected Two ${name}`);
    
})('sajid');