define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
     return function (params) {
        let titles = ko.observableArray([])

        ds.getTitles(data => {
        console.log(data);
          data["data"]["$values"].forEach(title => {
            titles.push(title)
        });

    });
        return {
            titles,
        };
    };
});
