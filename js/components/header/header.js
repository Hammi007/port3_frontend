define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        let addTitle = () => postman.publish("changeView", "add-title");

        postman.subscribe("newTitle", title => {
            ds.addTitle(title, newTitle);
        });

        return {
            addTitle
        }
    };
});