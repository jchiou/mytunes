// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function(song) {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function(song) {
      this.remove(song);
      if (this.length > 0) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(song) {
      if (this.at(0) === song) {
        this.playNext();
      } else {
        this.remove(song);
      }
    });
  },

  playFirst: function() {
    this.at(0).play();
  },

  playNext: function() {
    this.shift();
    if (this.length > 0) {
      this.playFirst();
    } else {
      this.trigger('stop');
    }
  },

  enqueue: function(song) {
    this.add(song);
  }

});