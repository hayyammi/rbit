Tables =new Meteor.Collection ('tables');
if (Meteor.isClient) {

  Template.mainmenu.tablesNo=function (e){

    var table = Session.get('tablesNm');
    if(!Session.get('tablesNm')){
      //console.log(table,'if');
    }else{
      //console.log(table); //ok
      var ts = new Date()/1000;
      Meteor.call('tablesInsert', table,ts);
      return table;
    }
  };
}


