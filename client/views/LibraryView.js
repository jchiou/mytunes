// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'div',

  initialize: function() {
    this.searchView = new SearchView();
    this.render();
    this.collection.on('add change', this.render, this);
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    
    this.$el.append('<table></table>').html('<th>Library</th>').append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
    this.$el.prepend(this.searchView.$el);
  }

});
