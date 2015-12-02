ReactionCore.registerPackage({
  label: "Carousel",
  name: "reaction-carousel",
  autoEnable: false,
  settings: {
    someSecret: "secret"
  },
  registry: [
    {
      provides: "dashboard",
      label: "Carousel",
      description: "Upload products through a file.",
      icon: "fa fa-upload"
    },
    {
      label: "Carousel Settings",
      route: "dashboard/carousel",
      provides: "settings",
      container: "carousel",
      template: "carousel",
    },
    {
      route: "carousel",
      provides: "settings",
      container: "dashboard",
    },
  ],
  permissions: [
    {
      label: "Carousel",
      permissions: "Carousel",
      group: "Shop Settings"
    }
  ]
});
