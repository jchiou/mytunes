// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'https://api.parse.com/1/classes/songs/',
  
  parse: function(data) {
    return data.results;
  },

  initialize: function() {
    var collection = this;
    collection.fetch();
    // $.ajax({
    //   url: this.url,
    //   type: 'GET',
    //   success: function (result) {
    //     result.results.forEach(function(song) {
    //       collection.add(song, {silent: true});
    //     });
    //     collection.trigger('add', this);
    //   },
    //   error: function (data) {
    //     console.error('Failed to fetch');
    //   }
    // });


  }

});