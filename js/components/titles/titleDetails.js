define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        let titleObject = ko.observable();

        postman.subscribe("titleDetails", titleId => {
            ds.getTitle(titleId => {
                titleObject(titleId)
                console.log(titleObject)
            });
        });

        return {
            titleObject 

        }

    };
});