define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        let currentView = params.currentView
        return {
            currentView
        }

    };
});