define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        let genreObject = ko.observable();
        let titles = ko.observableArray([]);
        let titleId = ko.observable();

        let titleDetails = (data) => {
            postman.publish("titleDetails", data);
            /*postman.publish("changeView", "title-details");*/
        }

        postman.subscribe("listTitlesByGenre", data => {
            genreObject(data);
            console.log(data)
            console.log(genreObject()); 
        });

        ds.getTitles(data => {
            console.log(data);
                data["data"]["$values"].forEach(title => {
                titles.push(title);
            });
        });
        
        return {
            titles,
            titleId,
            titleDetails,
            genreObject 
        }
    };
});