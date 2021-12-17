define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {

    
    //let searched_titles = ko.observableArray([]);

    let searched_titles = ko.observable();

    let search_needle = ko.observable();

    postman.subscribe("search-title", data => {
        searched_titles({}); 
        search_needle(data);
        ds.search(search_needle(), setData);
    });


    function setData(data) 
    {
        console.log(data)
        data.data.$values.forEach(element => {
            console.log(element)
            if(element.genres.$values[0].title === undefined){
                console.log(findObjectByKeyName(data, element.genres.$values[0].$ref))
                console.log("needle: " + element.genres.$values[0].$ref)
                element.genres.$values[0].title = { "omdb":findObjectByKeyName(data, element.genres.$values[0].$ref),
                "principal": "test"}
            }

        });
        searched_titles(data);
        console.log(searched_titles());
        
    }

    return {
        search_needle,
        searched_titles
    }
    };
});