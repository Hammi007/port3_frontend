﻿define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
     return function (params) {
        let titles = ko.observableArray([])
        let titleId = ko.observable();

        let titleDetails = (data) => {
            postman.publish("titleDetails", data.titleId)
            postman.publish("changeView", "title-details");
        }

        ds.getTitles(data => {
        console.log(data);
            data["data"]["$values"].forEach(title => {
            titles.push(title)
        });

    });
        return {
            titles,
            titleId,
            titleDetails
        };
    };
});
