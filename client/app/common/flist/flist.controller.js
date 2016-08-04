class FListController {
    constructor(flickDataService) {
        console.log('%c constructor', 'color: green');
        console.log('items', this.items);
        setTimeout(()=>console.log(this.items), 2000);
        //let self = this;
        //flickDataService.getData().then(result => {
        //    this.items = result.data.items;
        //    console.log('items', this.items);
        //});
    }
}

FListController.$inject = ['flickDataService'];

export default FListController;
