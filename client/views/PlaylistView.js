var PlaylistView = Backbone.View.extend({
  
  tagName: 'table',

  className: 'playlist',

  initialize: function() {
    this.render();
  },

  render: function() {

    this.$el.append('<th>My playlist</th>');

  }

});