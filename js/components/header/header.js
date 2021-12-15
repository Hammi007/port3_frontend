define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        let addTitle = () => postman.publish("changeView", "add-title");
        let genre = ko.observable();

        postman.subscribe("newTitle", title => {
            ds.AddTitle(title, "newTitle");
        });

        let listGenre = (data, event) => {
            postman.publish("listTitlesByGenre", event.target.id);
            postman.publish("changeView", "list-genre");
            console.log(event.target.id)
            console.log(data);
        }
        
        return {
            addTitle,
            listGenre,
            genre
        }

        

    };
});