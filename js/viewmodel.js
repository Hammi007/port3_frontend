﻿define(["knockout", "postman"], function (ko, postman) {

    let currentView = ko.observable("add-frontpage");
    let headerView = ko.observable("add-header");
    let frontpageView = ko.observable("add-frontpage");
    let titleDetailsView = ko.observable("title-details");
    let frontpagesliderView = ko.observable("add-frontpage-slider");
    let frontpagefooterView = ko.observable("add-frontpage-footer");
    let addTitleView = () => currentView("addTitleView")

    postman.subscribe("changeView", function (data) {
    currentView(data);

});

    return {
        currentView,
        headerView,
        frontpageView,
        frontpagesliderView,
        frontpagefooterView,
        titleDetailsView,
        addTitleView
    }
});