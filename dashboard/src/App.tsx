import { createSignal, For, Show, type Component } from "solid-js";

import "./styles.css";
import { Avatar, Button, Link } from "@suid/material";
import Credentials from "./Pages/Credentials";
import Login  from "./Pages/Login";

const App: Component = () => {
  const [loggedIn, setLoggedIn] = createSignal(false);

  const [avatarurl, setAvatarUrl] = createSignal(
    ""
  )

  const handleLogin = () => {
    //after we login we set the avatar url and the logged in state
  }

  return (
    <>
      <Show when={loggedIn()}>
        <header class="bg-background border-b sticky top-0 z-40 px-4 w-[100%] sm:px-6 flex items-center h-16">
          <nav class="flex items-center gap-6 text-sm font-medium w-[100%]">
            <Button variant="text" size="small">
              <Package2Icon class="w-6 h-6" />
              <span class="sr-only">Acme Inc</span>
            </Button>
            <Button variant="text">
              <Link
                href="#"
                class="text-foreground font-bold !text-black !no-underline"
              >
                Credentials
              </Link>
            </Button>

            <Button>
              <Link
                href="#"
                class="text-muted-foreground hover:text-foreground !text-black !no-underline float-right"
              >
                Settings
              </Link>
            </Button>
            <div class="ml-auto">
              <Avatar
                src={avatarurl()}
              />
            </div>
          </nav>
        </header>
        <Credentials />
      </Show>
      <Show when={!loggedIn()}>
        <Login/>
      </Show>
    </>
  );
};

export default App;

function Package2Icon(props: { class: string }) {
  return (
    <svg
      class={props.class}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}
