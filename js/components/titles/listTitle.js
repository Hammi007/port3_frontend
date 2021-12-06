define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        let currentView = params.currentView
        let titles = ko.observableArray([]);
        let addTitleView = () => currentView("add-title")

        ds.getTitles(data => {
            console.log(data);
            titles([data["data"]["$values"]]);
        });

        return {
            titles,
            addTitleView,
            currentView 
        }

    };
});