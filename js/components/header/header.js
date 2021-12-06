define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        let addTitle = () => postman.publish("changeView", "add-title");

        postman.subscribe("newTitle", title => {
            ds.AddTitle(title, "newTitle");
        });
        return {
            addTitle
        }
    };
});