define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        let genreObject = ko.observable();
        let titles = ko.observableArray([]);
        let titleId = ko.observable();
        
        let genres = ko.observableArray();
        let selectedGenre = ko.observableArray([]);

        var selected_genre = ko.observable();
        /* Populating the page with all all titles */
        let titleDetails = (data) => {
            postman.publish("titleDetails", data);
            
        }   
        function setData(data){
            data["data"]["$values"].forEach(title => {
                titles.push(title);
                console.log(title)
            });
        }
        
        //TESTING
        /* Trying to pupulate the page with selected genre titles */ 

        postman.subscribe("listTitlesByGenre", data => {
            if(typeof(data) == "string"){
                console.log("Set selected genre to: " + data)
                selected_genre(data)
                ds.searchTitleByGenre(selected_genre(), setData)
            }
            console.log(data)
        });
        
    
        return {
            titles,
            titleId,
            titleDetails,
            genreObject,
            genres,
            selectedGenre,
            selected_genre,
        }
    };
});