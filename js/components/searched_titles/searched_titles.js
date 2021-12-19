define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {

    
    //let searched_titles = ko.observableArray([]);

    let searched_titles = ko.observable();

    let search_needle = ko.observable();

    postman.subscribe("search-title", data => {
        search_needle(data);
        ds.search(search_needle(), setData);
    });

    let titleDetails = (data) => {
        postman.publish("titleDetails", data);
        postman.publish("changeView", "vm-title-details");

    }
    function setData(data) 
    {
        console.log(data)
        
        searched_titles(data);
        
        
    }

    return {
        search_needle,
        searched_titles,
        titleDetails
    }
    };
});