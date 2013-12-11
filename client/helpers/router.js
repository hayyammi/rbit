Meteor.Router.add({
  '/chat': 'chat',
  '/':'tablesList',
  '/profile':'profile',
  '/admin-login':'adminLogin',
  '/admin-menu:email':{ 
    to: 'adminMenu', and: function(email) {
      Session.set('useremail', email);
      return;
    }
  },
  '/menu':'menu',
  '/table-account:id':{ 
    to: 'tableAccount', and: function(id) {
      Session.set('tablesNm', id);
      return;
    }
  },
  '/tables:id':{ 
    to: 'menu', and: function(id) {
      Session.set('tablesNm', id);
      return;
    }
  },
  '*' : function(e) {
    return alert('Aradığız sayfaya ulaşılamadı!!');
  }
});

