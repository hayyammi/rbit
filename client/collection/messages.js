
Meteor.methods({

  signupSubmit : function(postData) {

    var signinEmailExist = Messages.findOne({
      email : postData.email
    });

    if (postData.email && signinEmailExist)
      throw new Meteor.Error(422, "exist in signinDB");

    var signupEmailExist = signupDB.findOne({
      email : postData.email
    });

    if (postData.email && signupEmailExist)
      throw new Meteor.Error(422, "exist in signupDB");       //    

    var user = _.extend(_.pick(postData, 'email', 'password'), {
      insert_time : new Date().getTime()      });

    var userId = signupDB.insert(user);

    return userId;
  }

});
