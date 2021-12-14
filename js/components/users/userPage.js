define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        let user = ko.observable();
        let username = ko.observable(localStorage.getItem("username"));
        let id = ko.observable();

        let searchHistory = () => {
            let queryString = {
                user : localStorage.getItem("username")
            };
            console.log(queryString)
            ds.getHistory(queryString, data=> {
                console.log(data)
            });
        };
        // let getUser = () => {
        //     id(localStorage.getItem("username"))
        //     ds.getUser(id, data=> {
        //         console.log(data)
        //     }).then(data => user(data))
        //  };

        function setData(data){
            user(data)
            console.log(data)
        }


         let getUser = () => {
             ds.getUser(localStorage.getItem("username"), setData)
         };

        postman.subscribe("pageDetails", data => {
            getUser()
        });
        
        return {
            searchHistory,
            username,
            getUser,
            user,
            id,
        }

    };
});