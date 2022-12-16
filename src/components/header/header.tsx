import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";

export default component$(() => {

  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-info mb-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="https://qwik.builder.io/">
            <QwikLogo />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a class="nav-link" href="/todo/">
                Todo
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
});
