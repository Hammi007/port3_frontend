define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        let titleObject = ko.observable();
        postman.subscribe("titleDetails", data => {
            titleObject(data);
        });

        return {
            titleObject 
        }
    };
});