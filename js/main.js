﻿/// <reference path="lib/jquery/dist/jquery.min.js" />
/// <reference path="lib/knockout/build/output/knockout-latest.debug.js" />


require.config({
    baseUrl: 'js',
    paths: {
        text: "lib/requirejs/text",
        jquery: "lib/jquery/dist/jquery.min",
        knockout: "lib/knockout/build/output/knockout-latest.debug",
        dataService: "services/dataService", postman: "services/postman"
    }
});


// component registration
require(['knockout'], (ko) => {
    ko.components.register("list-title", {
        viewModel: { require: "components/titles/listTitle" },
        template: { require: "text!components/titles/listTitle.html" }
    });

    ko.components.register("add-header", {
        viewModel: { require: "components/header/header" },
        template: { require: "text!components/header/header.html" }
    });

    ko.components.register("add-title", {
        viewModel: { require: "components/titles/addTitle" },
        template: { require: "text!components/titles/addTitle.html" }
    });

    ko.components.register("title-details", {
        viewModel: { require: "components/titles/titleDetails" },
        template: { require: "text!components/titles/titleDetails.html" }
    });

    ko.components.register("add-frontpage", {
        viewModel: { require: "components/frontPage/frontpage" },
        template: { require: "text!components/frontPage/frontpage.html" }
    });

    ko.components.register("add-frontpage-footer", {
        viewModel: { require: "components/frontPage/footer" },
        template: { require: "text!components/frontPage/footer.html" }
    });

    ko.components.register("add-login", {
        viewModel: { require: "components/login/login" },
        template: { require: "text!components/login/login.html" }
    });

    ko.components.register("add-register", {
        viewModel: { require: "components/login/register" },
        template: { require: "text!components/login/register.html" }
    });


    ko.components.register("add-userpage", {
        viewModel: { require: "components/users/userPage" },
        template: { require: "text!components/users/userPage.html" }
    });

});

require(["knockout", "viewmodel"], function (ko, vm) {
    //console.log(vm.);

    ko.applyBindings(vm);

});