Messages = new Meteor.Collection ('messages');

if (Meteor.isClient) {
  var  set_error= function (message) {
    return Session.set("error", message);
    
  };
  var okcancel_events = function (selector) {
    return 'keyup '+selector+', keydown '+selector+', focusout '+selector;
  };
  
  var btn_events = function (selector) {
    return 'click ' + selector; //, keydown '+selector+', focusout '+selector;
  };
  // Creates an event handler for interpreting "escape", "return", and "blur"
  // on a text field and calling "ok" or "cancel" callbacks.
  var make_okcancel_handler = function (options) {
    var ok = options.ok || function () {};
    var cancel = options.cancel || function () {};

    return function (evt) {
      if (evt.type === "keydown" && evt.which === 27) {
        // escape = cancel
        cancel.call(this, evt);
      } else if (evt.type === "keyup" && evt.which === 13) {
        // blur/return/enter = ok/submit if non-empty
        var value = String(evt.target.value || "");
        if (value)
          ok.call(this, value, evt);
        else
          cancel.call(this, evt);
      }
    };
  };//added as test

  Template.chat.events = {};
  Template.chat.events[okcancel_events('#messageBox')]= make_okcancel_handler ({
    
    ok:function (text,event){
      var name = document.getElementById('name').value.trim();
      var ts =Date.now() / 1000;
      if(name !="" && name.length >= 2){
      	Meteor.call('messagesInsert',name,text,ts);
        event.target.value="";
      } else {
	alert("isim alanı: boş bırakılamaz ve 1 karakter olamaz");
      }
    }
  });
  
  Template.messages.messages = function () {
    return Messages.find({},{sort :{time:-1}});
  };
  
  Template.chatBtn.events={    
    'click button.delete': function(e) {
      e.preventDefault();
      if (confirm('Tüm mesajlar silinsin mi?')) {
	Meteor.call('removeAllMessages');
      }
    }
  };
}
