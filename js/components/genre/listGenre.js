define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        let genreObject = ko.observable();
        let titles = ko.observableArray([]);
        let titleId = ko.observable();
        
        let genres = ko.observableArray();
        let selectedGenre = ko.observableArray([10]);

        
        /* Populating the page with all all titles */
        let titleDetails = (data) => {
            postman.publish("titleDetails", data);
            
        }

        ds.getTitlesByGenre(data => {
            console.log(data);
                data["data"]["$values"].forEach(title => {
                titles.push(title);
            });
        });
        
        /*Trying to pupulate the page with selected genre titles*/ 

        //Henriks code
        selectedPageSize.subscribe(() => {
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
            genreObject 
        }
    };
});