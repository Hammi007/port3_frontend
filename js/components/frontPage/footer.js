define(['knockout', 'postman'], function (ko, postman) {
    return function (params) {
        let pageSizes = ko.observableArray([10,20,25,100]);
        let selectedPageSize = ko.observableArray([10]);
        let prev = ko.observable();
        let next = ko.observable();
        let currentPage = ko.observable("https://localhost:5001/api/titles?page=0&pagesize=10");
        let searchfn = params.searchfn
        let selectedGenre = ko.observable();
        let pagenum = ko.observable();
        let visible = ko.observable(true);

        let showPrev = () => {
            let getData = searchfn.fn
            getData(prev());
            currentPage(prev())
        }

        let enablePrev = ko.computed(() => prev() !== undefined);

        let showNext = () => {
            let getData = searchfn.fn
            getData(next());
            console.log(next())
            currentPage(next())
        }

        let enableNext = ko.computed(() => next() !== undefined || next());


        postman.subscribe("changePage", data => {
            prev(data.paging.previousPage || undefined);
            next(data.paging.nextPage || undefined);
            
            const url = new URL(currentPage());
            const searchParams = new URLSearchParams(url.search);
            pagenum(parseInt(searchParams.get('page'))+1)
        });
        postman.subscribe("changed_genre", theGenre => {
            selectedGenre(theGenre)
            const searchParams = new URLSearchParams(currentPage());
            searchParams.set('genre', selectedGenre())
        });

        selectedPageSize.subscribe(() => {
            let getData = searchfn.fn
            const searchParams = new URLSearchParams(currentPage());
            searchParams.set('pagesize', selectedPageSize())
            getData(decodeURIComponent(searchParams.toString()));
        });

        return {
            showPrev,
            showNext,
            selectedPageSize,
            pageSizes,
            pagenum,
            enableNext,
            enablePrev,
            currentPage,
            visible
        }

    };
});