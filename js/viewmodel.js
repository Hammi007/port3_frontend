define(["knockout", "dataService"], function (ko, ds) {

    let currentView = ko.observable("list-title");
    let HeaderView = ko.observable("add-header");
    let addTitleView = () => currentView("add-title")

    return {
        currentView,
        HeaderView,
        addTitleView,
    }
});