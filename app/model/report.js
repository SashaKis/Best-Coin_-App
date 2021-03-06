// Shared Report Constructor
bestCoinApp.factory("Report", function(){
    function Report(plainObject) {
        this.mood = plainObject.mood;
        this.health = plainObject.health;
        this.subjects = plainObject.subjects;
        this.results = plainObject.results;
        this.average = plainObject.average;
        this.goodDeeds = plainObject.goodDeeds;
        this.helpFamely = plainObject.helpFamely;
        this.tellSome = plainObject.tellSome;
        this.imgURL = plainObject.imgURL;
    };
    return Report;
});