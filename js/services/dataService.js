﻿define([], () => {
    let AddTitle = (title, callback) => {
        let param = {
            method: "POST",
            body: JSON.stringify(title),
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch("https://localhost:5001/api/titles/add", param)
            .then(response => response.json())
            .then(json => callback(json));
    };

    let getTitles = (callback) => {
        fetch("https://localhost:5001/api/titles")
            .then(response => response.json())
            .then(json => callback(json));
    };
// Not sure if this is right?
    let getTitle = (id, callback) => {
        fetch("https://localhost:5001/api/titles/", id)
            .then(response => response.json())
            .then(json => callback(json));
    };

    let removeTitle = (title) => {
        let param = {
            method: "POST",
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

    let commenTitle = (comment) => {
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


    let getRatingForTitle = (TitleRating, callback) => {
        fetch("https://localhost:5001/api/titles/rating", TitleRating)
            .then(response => response.json())
            .then(json => callback(json));
    };

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

    return {
        AddTitle,
        getTitles,
        getTitle,
        removeTitle,
        bookmarkTitle,
        searchTitleByGenre,
        commenTitle,
        getHistory,
        getRatingForTitle,
        rateTitle
    }
});