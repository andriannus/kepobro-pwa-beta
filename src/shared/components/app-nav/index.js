import { html } from "lit-html";

const AppNavbar = html`
  <nav role="navigation">
    <div class="container">
      <div class="nav-wrapper">
        <ul>
          <li>
            <a class="sidenav-trigger" href="#" data-target="nav-mobile">
              <i class="material-icons">menu</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`;

const AppSidenav = html`
  <ul class="sidenav" id="nav-mobile">
    <li>
      <a class="waves-effect" href="home">
        <i class="material-icons">home</i>
        Home
      </a>
    </li>

    <li>
      <a class="waves-effect" href="about">
        <i class="material-icons">account_circle</i>
        About
      </a>
    </li>

    <li>
      <a class="waves-effect" href="contact">
        <i class="material-icons">contacts</i>
        Contact
      </a>
    </li>
  </ul>
`;

const AppNav = html`${AppNavbar} ${AppSidenav}`;

export default AppNav;
