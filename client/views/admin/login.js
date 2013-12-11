users = new Meteor.Collection('users');
if (Meteor.isClient) {
  Template.adminLogin.events = {
    'click .send': function(e){
      e.preventDefault();
      
      var email = document.getElementById('email').value.trim(),
	  password = document.getElementById('password').value.trim();
      if(email===''){
	console.log('data olusmadı'); 
        
      } else {
	var myuser = users.find({email:email,password:password});
	if(myuser.count()>=1){
	  var userread=myuser.fetch();
	  //console.log(userread[0]._id);
	  Session.set('userDataSession',userread[0]);
	  console.log(Session.get('userDataSession'));
	   window.location.href = "/admin-menu"+userread[0].email; 
	}else{
	  alert('Hata');
	}

      }
    }
  }

  
};
