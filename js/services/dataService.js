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
        fetch("https://localhost:5001/api/titles") //ttasf1294qw1
            .then(response => response.json())
            .then(json => callback(json));
    };

    let getTitle = (id, callback) => {
        fetch("https://localhost:5001/api/titles/" + id)
            .then(response => response.json())
            .then(json => callback(json));
    };

    let getStars = (id, callback) => {
        fetch("https://localhost:5001/api/titles/stars?titleId=" + id)
            .then(response => response.json())
            .then(json => callback(json));
    };

    let search = (queryString, callback) => {
        fetch("https://localhost:5001/api/titles/search?needle=" + queryString)
            .then(response => response.json())
            .then(json => callback(json));
    };

    let removeTitle = (title) => {
        let param = {
            method: "DELETE",
            body: JSON.stringify(title),
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch("https://localhost:5001/api/titles/remove", param)
            .then(response => response.json())
    };

    let bookmarkTitle = (bookmarkTitle) => {
        let param = {
            method: "POST",
            body: JSON.stringify(bookmarkTitle),
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch("https://localhost:5001/api/titles/bookmark/title", param)
            .then(response => response.json())
    };

    let searchTitleByGenre = (queryString, callback) => {
        fetch("https://localhost:5001/api/titles/search", queryString)
            .then(response => response.json())
            .then(json => callback(json));
    };

    let commentTitle = (comment) => {
        let param = {
            method: "POST",
            body: JSON.stringify(comment),
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch("https://localhost:5001/api/titles/comments", param)
            .then(response => response.json())
    };

    let getHistory = (queryString, callback) => {
        fetch("https://localhost:5001/api/titles/gethistory", queryString)
            .then(response => response.json())
            .then(json => callback(json));
    };


    // let getRatingForTitle = (title) => {
    //     var returns
    //     console.log(title)
    //     fetch("https://localhost:5001/api/titles/rating", {
    //         method: 'POST',
    //         body: JSON.stringify({"titleId" : title}),
    //         headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json'}
    //         })
    //         .then(response => response.json())
    //         .then(json => returns = json)
    //     return returns
    // };

    let rateTitle = (urt) => {
        let param = {
            method: "POST",
            body: JSON.stringify(urt),
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch("https://localhost:5001/api/titles/comments", param)
            .then(response => response.json())
    };


    let updateTitle = (id, title) => {
        let param = {
            method: "PUT",
            body: JSON.stringify(title),
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch("https://localhost:5001/api/titles/", param, id)
            .then(response => response.json())
    };

    return {
        AddTitle,
        getTitles,
        getTitle,
        getStars,
        removeTitle,
        bookmarkTitle,
        searchTitleByGenre,
        commentTitle,
        getHistory,
        rateTitle,
        updateTitle,
        search
    }
});