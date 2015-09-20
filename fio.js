Meteor.startup(function() {
  
  if (Users.find().count() === 0) {

    var sampleUser = [
      {
        id: Random.id(),
        name: 'Avózinha',
        callsign: 
      },

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
