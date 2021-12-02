define(['knockout', 'dataService'], function (ko, ds) {
    return function (params) {
        let currentView = params.currentView
        return {
            currentView
        }

    };
});