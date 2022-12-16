import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      <main class="container">
        <Header />
        <section>
          <Slot />
        </section>
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <a href="https://www.builder.io/" target="_blank">
            Made with ♡ by Builder.io
          </a>
        </footer>
      </main>
    </>
  );
});
