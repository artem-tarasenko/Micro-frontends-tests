import { registerApplication, start } from "single-spa";
import './window-store';


registerApplication({
  name: "dashboard-page",
  app: () => System.import("@macro/dashboard-page"),
  activeWhen: [(location) => location.pathname === "/"],
});

registerApplication({
  name: "mealplan-page",
  app: () => System.import("@macro/mealplan-page"),
  activeWhen: ["/mealplan"],
});

registerApplication({
  name: "workouts-page",
  app: () => System.import("@macro/workouts-page"),
  activeWhen: ["/workouts"],
});

registerApplication({
  name: "nav",
  app: () => System.import("@macro/nav"),
  activeWhen: ["/"],
});

registerApplication({
  name: "settings",
  app: () => System.import("@macro/app-settings-vue"),
  activeWhen: ["/mealplan"],
});




// importing app with WP5 Module Federation instead of System.js
registerApplication({
  name: "form",
  app: () => import("reactSA/Form"),
  activeWhen: ["/workouts"],
});

registerApplication({
  name: "dumb",
  app: () => import("reactSA/Dumb"),
  activeWhen: ["/workouts"],
});



// #############################################################

start({
  urlRerouteOnly: true,
});
