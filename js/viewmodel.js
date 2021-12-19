﻿define(["knockout", "postman"], function (ko, postman) {
    let currentView = ko.observable("vm-frontpage");
    let headerView = ko.observable("vm-header");
    let frontpageView = ko.observable("vm-frontpage");
    let titleDetailsView = ko.observable("vm-title-details");
    let frontpagefooterView = ko.observable("vm-frontpage-footer");
    let loginView = ko.observable("vm-login");
    let registerView = ko.observable("vm-register");
    let userpageView = ko.observable("vm-userpage");
    let genreView = ko.observable("vm-list-genre");
    let searchtitleview = ko.observable("vm-search-title-view");
    let addTitleView = () => currentView("addTitleView")
    let searchfn = {}
    var footerVisible = ko.observable(true);
    
    postman.subscribe("show_footer!", boolean => {
        footerVisible(boolean)
    });
    postman.subscribe("changeView", function (data) {
    currentView(data);

});

    return {
        currentView,
        headerView,
        frontpageView,
        frontpagefooterView,
        titleDetailsView,
        addTitleView,
        loginView,
        registerView,
        userpageView,
        genreView,
        addTitleView,
        searchtitleview,
        searchfn, 
        footerVisible
    }
});