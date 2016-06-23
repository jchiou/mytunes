// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: 'table',

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'remove', this.render);
  },

  render: function() {
    this.$el.html('<th>Song Queue</th>');
    this.collection.forEach(function(song) {
      var songView = new SongQueueEntryView({model: song});
      this.$el.append(songView.render());
    }, this);
  },


});
