angular.module('starter.services', [])

.factory('Users', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var users = [{
    id: 0,
    name: 'Krister Drivenes',
    title: 'Vaktmester',
    skills: 'Vektløfting, Photoshop, bjeffing',
    face: 'img/krister.png'
  }, {
    id: 1,
    name: 'Aleksander Vatle Waage',
    title: 'Fagleder',
    skills: 'Bestille fra Dolly, kjøre for fort',
    face: 'img/Aleks.png'
  }, {
    id: 2,
    name: 'Remi Sture',
    title: 'CEO',
    skills: 'Burgere, roing, hjemmekontor',
    face: 'img/remi.png'
  }];

  return {
    all: function() {
      // Fetch users using Appstax API
      return users;
    },
    remove: function(user) {
      users.splice(users.indexOf(user), 1);

      // Remove user using Appstax API
    },
    get: function(userId) {
      for (var i = 0; i < users.length; i++) {
        if (users[i].id === parseInt(userId)) {
          return users[i];
        }
      }
      return null;
    }
  };
});
