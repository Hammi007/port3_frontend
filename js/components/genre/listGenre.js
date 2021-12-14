define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        let genreObject = ko.observable();
        let titles = ko.observableArray([]);
        let titleId = ko.observable();
        
        let genres = ko.observableArray();
        let selectedGenre = ko.observableArray([]);

        
        /* Populating the page with all all titles */
        let titleDetails = (data) => {
            postman.publish("titleDetails", data);
            
        }   
        ds.getTitles(data => {
            console.log(data);
                data["data"]["$values"].forEach(title => {
                titles.push(title);
            });
        });
        //TESTING
        /* Trying to pupulate the page with selected genre titles */ 

        //Henriks code
        selectedGenre.subscribe(() => {
            var genre = selectedGenre()[0];
            getData(ds.searchTitleByGenre(genre));
        });
        
        postman.subscribe("listTitlesByGenre", data => {
            console.log(data)
            console.log(genreObject()); 
        });
        
    
        return {
            titles,
            titleId,
            titleDetails,
            genreObject,
            genres,
            selectedGenre,
        }
    };
});