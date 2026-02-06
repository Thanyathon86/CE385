const eventloop = (callback) => {
    console.log("Begin");
    setTimeout(() =>{
        const result = callback("first");
        console.log(result);
    }, 2000);
    setTimeout(() => {
          const result = callback("second");
        console.log(result);
    }, 1000);
     setTimeout(() => {
          const result = callback("third");
        console.log(result);
    }, 0);
    console.log("End");
}
eventloop((message) =>{
    return message;
});