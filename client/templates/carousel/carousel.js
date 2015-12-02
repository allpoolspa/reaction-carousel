featured = Meteor.subscribe('featuredProducts');

Template.featuredCarousel.onCreated( function() {
  this.subscribe('featuredProducts');

});


Template.featuredCarousel.onRendered( function() {
  $(".owl-carousel").owlCarousel();

});
