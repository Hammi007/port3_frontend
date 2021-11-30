define([], () => {

    

    let getTitles = (callback) => {
        fetch("http://localhost:5001/api/titles")
            .then(response => response.json())
            .then(json => callback(json));
    };


    return {
        getTitles
    }
});