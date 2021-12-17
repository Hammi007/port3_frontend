define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        let titles = ko.observableArray([]);
        let searchfn = params.searchfn
        var selected_genre = ko.observable();
        let pageSizes = ko.observableArray();
        let selectedPageSize = ko.observableArray([10]);
        let prev = ko.observable();
        let next = ko.observable();
        let currentPage = ko.observable();
        /* Populating the page with all all titles */
        let titleDetails = (data) => {
            postman.publish("titleDetails", data);
            postman.publish("changeView", "title-details");

        }   
        function setData(data){
            titles(data.title.$values);
        }

        getData = (url) =>{
            ds.searchTitleByGenre(url, selected_genre(), data => {
                setData(data)
                pageSizes(data.pageSizes);
                currentPage(data.page)
                prev(data.prev || undefined);
                next(data.next || undefined);
                titles(data.title.$values);
                postman.publish("changePage", data);
            });
        }

        searchfn.fn = getData
        
        //TESTING
        /* Trying to pupulate the page with selected genre titles */ 

        postman.subscribe("listTitlesByGenre", data => {
            if(typeof(data) == "string"){
                console.log("Set selected genre to: " + data)
                selected_genre(data)
                getData(undefined ,selected_genre, setData)
                // ds.searchTitleByGenre(selected_genre(), setData)
            }
            console.log(data)
        });
        return {
            titles,
            titleDetails,
            selected_genre
        }
    };
});