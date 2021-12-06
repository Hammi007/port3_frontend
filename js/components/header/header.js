define(['knockout', 'dataService'], function (ko, ds) {
    return function (params) {
        let currentView = params.currentView;
        let addTitleView = () => currentView("addTitleView")
        return {
            currentView,
            addTitleView
        }
    };
});