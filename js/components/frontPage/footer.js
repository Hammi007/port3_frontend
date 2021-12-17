define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        let pageSizes = ko.observableArray();
        let selectedPageSize = ko.observableArray([10]);
        let prev = ko.observable();
        let next = ko.observable();
        let currentPage = ko.observable();
        let searchfn = params.searchfn

        let showPrev = title => {
            let getData = searchfn.fn
            getData(prev());
        }

        let enablePrev = ko.computed(() => prev() !== undefined);

        let showNext = title => {
            let getData = searchfn.fn
            getData(next());
        }

        let enableNext = ko.computed(() => next() !== undefined);


        postman.subscribe("changePage", data => {
            pageSizes(data.pageSizes);
            currentPage(data.page)
            prev(data.prev || undefined);
            next(data.next || undefined);
        });

        selectedPageSize.subscribe(() => {
            var size = selectedPageSize()[0];
            getData(ds.getTitlesUrlWithPageSize(size));
        });

        return {
            showPrev,
            showNext,
            selectedPageSize,
            pageSizes,
            enableNext,
            enablePrev,
            currentPage
        }

    };
});