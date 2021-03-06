// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'div',

  initialize: function() {
    this.searchView = new SearchView();
    this.render();
    this.collection.on('add change', this.render, this);
    this.$el.addClass('library');

    this.searchView.on('enterPressed', function() {
      var searchType = this.searchView.type;
      var searchText = this.searchView.value;
      this.collection.query(searchText, searchType.toLowerCase());
    }, this);
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    
    
    var $table = $('<table class="library-table" rules="none"></table>');
    $table.html('<tr><th colspan="3">Library</th></tr>').append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
    this.$el.append(this.searchView.$el);
    this.$el.append($table);
  }


});
