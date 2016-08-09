class FListController {
    constructor($compile, $sce) {
        let vm = this;

        vm.test = (data) => {
            console.log('data', data);
        }

        vm.convert = (html) => $sce.trustAsHtml(html);

        vm.$postLink = function() {
            console.log('elem', arguments);
        }
    }
}

FListController.$inject = ['$compile', '$sce'];

export default FListController;
