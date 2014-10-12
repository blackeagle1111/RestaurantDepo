var Rate = function (rateID, userID, comment, score, dateCreated) {
    this.rateID = rateID || 2;
    this.userID = userID || 4;
    this.comment = comment || "This is awesome";
    this.score = score || 5;
    this.dateCreated = dateCreated || new Date().toDateString();
}

Rate.prototype.sortByDate = function (rates) {    
    return rates.sort(function(rate1,rate2){
        if (rate1.dateCreated == rate2.dateCreated) {
            return 0;
        } else if (rate1.dateCreated > rate2.dateCreated) {
            return 1;
        } else if (rate1.dateCreated > rate2.dateCreated) {
            return -1;
        }
    })
}