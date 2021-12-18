define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
     return function (params) {
        let titles = ko.observableArray([]);
        let pageSizes = ko.observableArray([10,20,25,100]);
        let selectedPageSize = ko.observable(10);
        let prev = ko.observable();
        let next = ko.observable();
        let searchfn = params.searchfn
       
        let titleDetails = (data) => {
            postman.publish("titleDetails", data);
            postman.publish("changeView", "title-details");
        }

        getData = (url) =>{
            console.log(url)
            ds.getTitles(url, data => {
                prev(data.paging.previousPage || undefined);
                next(data.paging.nextPage || undefined);
                titles(data.data.$values);

                postman.publish("changePage", data);
            });
        }
        searchfn.fn = getData

        getData();
        
        return {
            titles,
            titleDetails,
            pageSizes,
            selectedPageSize,
            prev,
            getData
        };
    };
});
