console.log("Hello");

//  Q1- Currying  

function fn(a){
    return function(b){
        return console.log(a+b);
    };
};

console.log(fn(5)(6));

//  Q3- Sum (4)(5)(6)

function f(a){
    return function(b){
        return function(c){
            return a+b+c;
}
    }
}

console.log(f(4)(5)(6));


// Q3- 

function operation (methods){
    return function (a){
        return function (b){
            if(methods === "sum") return a+b;
            else if(methods === "sub") return a-b;
            else if(methods === "multiply") return a*b;
            else if(methods === "divide") return a/b;
            else "Invalid Operations"
}
    }
}

const add = operation("sum");

console.log(add(5)(7));



//  Q4- Infinite Currying - 

function addition (a){
    return function(b){
        if(b) return addition (a+b);
        return a;
}
}

console.log(addition(5)(5)(4)(6)()) ;

// Q5 - partial application vs currying - 

// Partial appliaction

function plus (x){              
    return function(y,z){
        return x+y+z;
    }
};

console.log("The addition of partial application is"+ ' '+ plus(20) (30,40));
 
//  Currying for the same plus function

function pluss(x1){
    return function(y1){
        return function(z1){
            return x1+y1+z1;
}
}
}

console.log(pluss(50) (50) (40));


// Q5 - Example of Currying in manipulating DOM -

function updateText (id){
    return function (content){
        document.querySelector('#' + id).textContent = content;
}
}

const upadteHead= updateText("Heading");

upadteHead("Hello World");