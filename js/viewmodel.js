﻿define(["knockout", "postman"], function (ko, postman) {
    let currentView = ko.observable("add-frontpage");
    let headerView = ko.observable("add-header");
    let frontpageView = ko.observable("add-frontpage");
    let titleDetailsView = ko.observable("title-details");
    let frontpagefooterView = ko.observable("add-frontpage-footer");
    let loginView = ko.observable("add-login");
    let registerView = ko.observable("add-register");
    let userpageView = ko.observable("add-userpage");
    let genreView = ko.observable("list-genre");
    let searchtitleview = ko.observable("search-title-view");
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