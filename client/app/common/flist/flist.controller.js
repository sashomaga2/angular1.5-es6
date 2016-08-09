class FListController {
    constructor(flickDataService) {
        // flickDataService.getData().then(result => {
        //    this.items = result.data.items;
        //    console.log('items', this.items);
        // });
    }
}

FListController.$inject = ['flickDataService'];

export default FListController;
