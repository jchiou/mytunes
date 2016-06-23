// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.queueView = new SongQueueView({collection: this.model.get('songQueue')});
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(this.model.get('currentSong'));
    }, this);
  },

  render: function() {
    var searchBar = '<input type="search" placeholder="Search" class="searchbar"></input>';
    var searchTypeList = [
      '<select>',
        '<option value="Artist">Artist</option>',
        '<option value="Title">Title</option>',
      '</select>'].join('');
    var searchSection = [
      '<div class="search">',
        searchTypeList,
        searchBar,
      '</div>'
    ].join('');

    return this.$el.html([
      this.playerView.$el,
      searchSection,
      this.libraryView.$el,
      this.queueView.$el
    ]);
  }

});
