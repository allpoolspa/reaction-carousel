/**
 * featuredProducts publication. Return products marked with "featured" hashtag
 * @param {Array} shops - array of shopId to retrieve product from.
 * @return {Object} return product cursor
 */
Meteor.publish("featuredProducts", function (shops) {
  check(shops, Match.Optional(Array));

  let shopAdmin;
  let shop = ReactionCore.getCurrentShop(this);
  let Products = ReactionCore.Collections.Products;
  if (shop) {
    let selector = {
      shopId: shop._id
    };
    // handle multiple shops
    if (shops) {
      selector = {
        shopId: {
          $in: shops
        }
      };
      // check if this user is a shopAdmin
      for (let thisShop of shops) {
        if (Roles.userIsInRole(this.userId, ["admin", "createProduct"],
            thisShop._id)) {
          shopAdmin = true;
        }
      }
    }

    // products are always visible to owners
    if (!(Roles.userIsInRole(this.userId, ["owner"], shop._id) || shopAdmin)) {
      selector.isVisible = true;
    }
    selector.tags = "featured";
    return Products.find(selector, {
      sort: {
        title: 1
      }
    });
  }
  this.ready();
});
