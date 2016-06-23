var ENTER_KEY = 13;
var SearchView = Backbone.View.extend({
  tagName: 'div',

  events: {
    keydown: 'searchRender' 
  },

  value: '',

  type: 'Artist',

  initialize: function() {
    this.render();
  },

  render: function() {
    var searchBar = '<input type="search" placeholder="Search" class="searchbar"></input>';
    var searchTypeList = [
      '<select>',
        '<option value="Artist">Artist</option>',
        '<option value="Title">Title</option>',
      '</select>'].join('');
    this.$el.html([
      '<div class="search">',
        searchTypeList,
        searchBar,
      '</div>'
    ].join(''));
  },

  searchRender: function(e) {
    if (e.which === ENTER_KEY) {
      this.value = $('.searchbar').val();
      this.type = $('select option:selected').val();
      this.trigger('enterPressed', this);
    }
  }
});