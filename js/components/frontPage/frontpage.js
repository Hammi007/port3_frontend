define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
     return function (params) {
        let titles = ko.observableArray([]);
        let titleId = ko.observable();

        let titleDetails = (data) => {
            postman.publish("titleDetails", data);
            postman.publish("changeView", "title-details");
        }

        ds.getTitles(data => {
            data["data"]["$values"].forEach(title => {
            titles.push(title);
            });
        });
        
        return {
            titles,
            titleId,
            titleDetails
        };
    };
});
