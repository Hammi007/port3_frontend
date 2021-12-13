define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        let addTitle = () => postman.publish("changeView", "add-title");
        let genre = ko.observable();

        postman.subscribe("newTitle", title => {
            ds.AddTitle(title, "newTitle");
        });
        
        let listGenre = (data) => {
            postman.publish("listTitlesByGenre", data);
            postman.publish("changeView", "list-genre");
            console.log(data);
        }
        
        return {
            addTitle,
            listGenre,
            genre
        }

        

    };
});