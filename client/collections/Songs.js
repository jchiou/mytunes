// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var collection = this;
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      success: function (result) {
        result.results.forEach(function(song) {
          collection.add(song);
        });
      },
      error: function (data) {
        console.error('Failed to fetch');
      }
    });


  }

});