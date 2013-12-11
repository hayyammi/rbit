if (Meteor.isClient) {

  Template.tableAccount.tablesNo=function (e){
    var table = Session.get('tablesNm');      
    return table;
  };
}
