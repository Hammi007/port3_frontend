define(['knockout', 'dataService'], function (ko, ds) {
    return function (params) {
        let currentView = params.currentView;
        let titleID = ko.observable();
        let Name = ko.observable();
        let Type = ko.observable();

        let cancelAddTitle = () => currentView("list-title");

        let addTitle = () => {
            console.log("addTitle");
            let title = { titleId: titleID(), OriginalTitle: Name(), TitleType: Type() };
            console.log(title)
            ds.AddTitle(title)
        }

        return {
            Name,
            Type,
            titleID,
            addTitle,
            cancelAddTitle
        }

    };
});