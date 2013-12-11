
Template.profile.profileData = function () { 
  var useremail =Session.get('useremail');
  return users.find({email:useremail});
};
 

Template.profile.events({
  'click  .send': function(e,tmp){
    e.preventDefault();
    
    var ts = new Date() / 1000,
	id = tmp.find('#id').value,
	email = tmp.find('#email').value,
	password = tmp.find('#password').value,
	currentMail = Session.get('useremail');

    console.log(id);
    Meteor.call('updateUser',currentMail,email,password,ts);
  }
});
