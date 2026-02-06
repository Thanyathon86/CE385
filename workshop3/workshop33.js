const fetchDataWithCallback = (callback) => {
    setTimeout(() => {
        callback("Data from Callback");
    }, 2000);
};

const fetchDataWithPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from Promise");
        }, 2000);
    });
};

fetchDataWithCallback((data) => {
    console.log(data);
});

fetchDataWithPromise()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });

    const simulateAsyncOperation = (timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (timeout >= 1000) {
                resolve("Operation successful");
            } else {
                reject("Error: Timeout too short");
            }
        }, timeout);
    });
};

const performAsyncTask = async (timeout) => {
    try {
        const result = await simulateAsyncOperation(timeout);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

performAsyncTask(1500);
performAsyncTask(500);