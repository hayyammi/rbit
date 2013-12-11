errorDB = new Meteor.Collection(null);

throwError = function(data) {
    errorDB.insert({data: "in throwError", del: "N"});
}
