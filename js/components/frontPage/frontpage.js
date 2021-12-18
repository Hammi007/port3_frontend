define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
     return function (params) {
        let titles = ko.observableArray([]);
        let pageSizes = ko.observableArray();
        let selectedPageSize = ko.observableArray([10]);
        let prev = ko.observable();
        let next = ko.observable();
        let currentPage = ko.observable();
        let searchfn = params.searchfn
       
        

        let titleDetails = (data) => {
            postman.publish("titleDetails", data);
            postman.publish("changeView", "title-details");
        }

        getData = (url) =>{
            ds.getTitles(url, data => {
                pageSizes(data.pageSizes);
                currentPage(data.page)
                prev(data.prev || undefined);
                next(data.next || undefined);
                titles(data.title.$values);
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
            currentPage,
            prev,
            getData
        };
    };
});
