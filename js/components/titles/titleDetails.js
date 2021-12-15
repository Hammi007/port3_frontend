define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        let titleObject = ko.observable();

        let stars = ko.observable();
        //let stars = ko.observableArray();


        postman.subscribe("titleDetails", data => {
            console.log(data);
            ds.getTitle(data.titleId, setData);
            ds.getStars(data.titleId, setData2);
        });

        function setData(data) 
        {
            titleObject(data);
            
        }

        function setData2(data) 
        {
            /*console.log("before");
            console.log(data);

            data["$values"].forEach(item => {
                stars.push(item);
                console.log("rtest");
                console.log(item);
                
            });

            console.log(stars());
            console.log(stars);*/
            stars(data);
            console.log(stars());
        }

        return {
            titleObject,
            stars
        }
    };
});