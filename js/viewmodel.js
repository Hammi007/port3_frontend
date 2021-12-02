define(["knockout", "dataService"], function (ko, ds) {

    let currentView = ko.observable("add-frontpage");
    let headerView = ko.observable("add-header");
    let frontpageView = ko.observable("add-frontpage");
    let frontpagesliderView = ko.observable("add-frontpage-slider");
    let frontpagefooterView = ko.observable("add-frontpage-footer");
    let addTitleView = () => currentView("add-title")

    return {
        currentView,
        headerView,
        frontpageView,
        frontpagesliderView,
        frontpagefooterView,
        addTitleView
    }
});