bestCoinApp.factory("children", function (Report) {
    var childArr = [];

    function getAll() {
        return childArr;
    }

    var loadAll = function (allDataObjectArr) {
        for (var i = 0; i < allDataObjectArr.length; i++) {
            childArr.push(new Report(allDataObjectArr[i]))
            // console.log(childArr);
        }
    }
    function getChildById(index) {
        return childArr[index];
    }

    var removeAll = function () {
        childArr = [];
    }
    function addReport(rep) {
        childArr.push(rep);
    }
    return {
        //         add: add,
        //         update: update,
        //         remove: remove,
        loadAll: loadAll,
        getAll: getAll,
        getChildById: getChildById,
        removeAll: removeAll,
        addReport: addReport
    }
})