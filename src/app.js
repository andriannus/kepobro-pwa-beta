import { html, render } from "lit-html";
import { Sidenav } from "materialize-css/dist/js/materialize";

import "@/shared/components/app-loader";
import AppNav from "@/shared/components/app-nav";
import globalService from "@/shared/services/global.service";

const { state$ } = globalService();
const root = document.getElementById("root");

const initializeSidenav = () => {
  const sidenav = document.querySelector(".sidenav");
  Sidenav.init(sidenav);
};

const content = () => {
  return html`${AppNav}`;
};

state$.subscribe(() => {
  render(content(), root);
  initializeSidenav();
});
