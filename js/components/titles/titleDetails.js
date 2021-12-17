define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        let titleObject = ko.observable();

        postman.subscribe("titleDetails", data => {
            console.log(data);

            ds.getTitle(data.titleId, setData);
        });

        function setData(data) 
        {
            data.trailer_link = "placeholder"
            data.thumbnail_link = "placeholder"
            console.log(data)
            titleObject(data); 
            var data_save = titleObject()
            fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&safeSearch=none&type=video&key=AIzaSyDhxnmAlr70HvNE0cMtGIDGc9bPAKYMsa8&q='+data.primaryTitle + " trailer")
                .then(resp => resp.json())
                .then((resp) => {
                    console.log(data.primaryTitle)
                    console.log("finish")
                    data_save.trailer_link = "https://www.youtube.com/embed/" + resp.items[0].id.videoId
                    data_save.thumbnail_link = "https://img.youtube.com/vi/"+resp.items[0].id.videoId+"/0.jpg"
                    titleObject(data_save);
                });  
        }

        return {
            titleObject
        }
    };
});