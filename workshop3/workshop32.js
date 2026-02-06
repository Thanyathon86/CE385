const fetchDataWithCallback = (callback) => {
    console.log("Fetching data with Callback... (waiting 2s)");
    setTimeout(() => {
        const data = "Data from Callback";
        callback(data);
    }, 2000);
};

const fetchDataWithPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("Fetching data with Promise... (waiting 2s)");
        setTimeout(() => {
            const success = true; 
            if (success) {
                resolve("Data from Promise");
            } else {
                reject("Error: Failed to fetch data");
            }
        }, 2000); 
    });
};

fetchDataWithCallback((result) => {
    console.log("Result:", result);
    
   
    fetchDataWithPromise()
        .then((result) => {
            console.log("Result:", result);
        })
        .catch((error) => {
            console.error(error);
        });
});