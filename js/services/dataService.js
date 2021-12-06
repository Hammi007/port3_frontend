define([], () => {

    let AddTitle = (title) => {
        let param = {
            method: "POST",
            body: JSON.stringify(title),
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch("https://localhost:5001/api/titles/add", param)
            .then(response => response.json())
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