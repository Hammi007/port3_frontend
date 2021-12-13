define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        let titleObject = ko.observable();
        let test = ko.observable();

        postman.subscribe("titleDetails", data => {
            console.log(data.titleId);
            ds.getTitle(data.titleId, setData);
        });

        function setData(data) 
        {
            titleObject(data);
        }

        return {
            titleObject
        }
    };
});