if (Meteor.isServer) {
  Messages = new Meteor.Collection ('messages');
  Tables = new Meteor.Collection ('tables');
  users = new Meteor.Collection('users');
  Meteor.startup(function () {
    
  });
  Meteor.methods({
    messagesInsert: function (name,text,ts){
      Messages.insert({name: name, message: text, time: ts});
    },    
    removeAllMessages: function(text,ts){
      Messages.remove({});
    },
    tablesInsert: function (text,ts) {
      Tables.insert({table: text, time: ts});
    },
    updateUser: function(currentMail,email,password,ts){
      users.update({"email":currentMail},{$set:{email:email,password:password,updateDate:ts}});
  
    }
   
    //}
    // userLogin: function (email,password){
    //   var myuser = users.find({email:email,password:password});
        
    //   if(myuser.count()>=1){
    //     var userId=this._id;
    //     //console.log(userId);
    //   }else{
    //     //console.log('not');
    //   }
    // }
  });
}
