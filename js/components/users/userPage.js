define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        let user = ko.observable();
        let username = ko.observable(localStorage.getItem("username"));
        let bookmarkedTitles = ko.observableArray([]);
        let commentedTitles = ko.observableArray([]);
        let ratedTitles = ko.observableArray([]);
        let titleDetails = (data) => {
            postman.publish("titleDetails", data);
            postman.publish("changeView", "title-details");
        }

        function setData(data){
            user(data)
            //Checks if bookmarktitles has titles by reference to other parts of the user object, or it has the full title object itself
            data.bookmarkTitles.$values.forEach(element => {
                if(element.$ref === undefined){
                    element = getObject(data, element.$ref)
                }
                if(element.title.$ref === undefined){
                    commentedTitles.push(element)
                } else {
                    element.title=getObject(data, element.title.$ref)
                    bookmarkedTitles.push(element)
                }
            });
            data.comments.$values.forEach(element => {
                if(element.title.$ref === undefined){
                    commentedTitles.push(element)
                } else {
                    element.title = getObject(data, element.title.$ref)
                    commentedTitles.push(element)
                }
            });
            data.userTitleRating.$values.forEach(element => {
                if(element.$ref === undefined){
                    ratedTitles.push(element)
                } else {
                    element = getObject(data, element.$ref)
                    if(element.title.$ref === undefined){
                        element.title = getObject(data, element.title.$ref)
                    }
                    ratedTitles.push(element)
                }
            });
        }

         let getUser = () => {
             ds.getUser(localStorage.getItem("username"), setData)
         };

        postman.subscribe("pageDetails", data => {
            getUser(data)
        });

        // QueryString example
        // let searchHistory = () => {
        //     let queryString = {
        //         user : localStorage.getItem("username")
        //     };
        //     console.log(queryString)
        //     ds.getHistory(queryString, data=> {
        //         console.log(data)
        //     });
        // };

        //Virker også
        // let getUser = () => {
        //     id(localStorage.getItem("username"))
        //     ds.getUser(id, data=> {
        //         console.log(data)
        //     }).then(data => user(data))
        //  };
        
        return {
            username,
            getUser,
            user,
            titleDetails,
            bookmarkedTitles,
            commentedTitles,
            ratedTitles
        }

    };
});