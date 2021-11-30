define([], () => {

    let AddTitle = (category, callback) => {
        let param = {
            method: "POST",
            body: JSON.stringify(title),
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch("api/titles", param)
            .then(response => response.json())
            .then(json => callback(json));
    };

    let getTitles = (callback) => {
        fetch("https://localhost:5001/api/titles")
            .then(response => response.json())
            .then(json => callback(json));
    };


    return {
        getTitles,
        AddTitle
    }
});