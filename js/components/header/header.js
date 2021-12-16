define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {

        //let addTitle = () => postman.publish("changeView", "add-title");
        let needle = ko.observable();

        let search = (data) => {
            postman.publish("search-title", needle._latestValue);
            postman.publish("changeView", "search-title-view"); //component for searched titles.
        }
        
        /*postman.subscribe("newTitle", title => {
            ds.AddTitle(title, "newTitle");
        });*/

        return {
            search,
            needle
        }
    };
});