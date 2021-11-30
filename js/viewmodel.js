define(["knockout", "dataService"], function (ko, ds) {

    let currentView = ko.observable("list");
    let titles = ko.observableArray([]);

    let selectTitleName = ko.observable();
    let selectTitleType = ko.observable();


    ds.getTitles(data => {
        console.log(data);
        titles(data["data"]["$values"]);
    });

    return {
        currentView,
        titles,
        selectTitleName,
        selectTitleType
    }
});