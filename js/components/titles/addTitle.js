define(['knockout', 'dataService', 'postman'], function (ko, ds, postman){
    return function (params) {
        let titleID = ko.observable();
        let Name = ko.observable();
        let Type = ko.observable();
        

        let cancelAddTitle = () => {
            postman.publish("changeView", "add-frontpage");
        }

        let addTitle = () => {
            console.log("addTitleee");
            postman.publish("newTitle", { titleId: titleID(), OriginalTitle: Name(), TitleType: Type() });
            console.log("addTitle")
            postman.publish("changeView", "add-frontpage");
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