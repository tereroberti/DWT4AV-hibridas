import { createHomePage } from "../views/home.views.js";

export function getHome(req, res) {
  res.send(createHomePage());
}
