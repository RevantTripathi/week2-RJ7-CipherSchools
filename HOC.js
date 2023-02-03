const add=(a,b) => {
    return a+b;
}

const higherOrder =(a,refrencefunction) => {
    return refrencefunction(a,20);

};

console.log(higherOrder(30,add));

//const NewComponent = higherOrderComponent(WrappedComponent)   -->syntax