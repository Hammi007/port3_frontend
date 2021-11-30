/// <reference path="lib/jquery/dist/jquery.min.js" />
/// <reference path="lib/knockout/build/output/knockout-latest.debug.js" />


require.config({
    baseUrl: 'js',
    paths: {
        text: "lib/requirejs/text",
        jquery: "lib/jquery/dist/jquery.min",
        knockout: "lib/knockout/build/output/knockout-latest.debug",
        dataService: "services/dataService"
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

});

require(["knockout", "viewmodel"], function (ko, vm) {
    //console.log(vm.);

    ko.applyBindings(vm);

});