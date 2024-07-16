import { Button } from "@suid/material";
import { Component } from "solid-js";

const Login: Component<{}> = (props) => {
  return (
    <div class="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-md space-y-6 text-center">
        <div>
          <MountainIcon class="mx-auto h-12 w-12 text-primary" />
          <h1 class="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Welcome to Eunity
          </h1>
          <p class="mt-4 text-muted-foreground">
            Sign in to access the Eunity portal and collaborate with your team.
          </p>
        </div>
        <div class="space-y-4">
          <Button variant="outlined" class="w-full  !text-black !border-black">
            <GithubIcon class="mr-2 h-5 w-5" />
            Sign in with GitHub
          </Button>
          <Button variant="outlined" class="w-full !text-black !border-black">
            <GoogleIcon class="mr-2 h-5 w-5" />
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;



function GithubIcon(props: { class: string }) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function GoogleIcon(props: { class: string }) {
  return (
    <svg
        class={props.class}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M 24 4 C 12.972292 4 4 12.972292 4 24 C 4 35.027708 12.972292 44 24 44 C 35.027708 44 44 35.027708 44 24 C 44 23.059412 43.91551 22.160784 43.798828 21.298828 A 1.50015 1.50015 0 0 0 42.3125 20 L 24.5 20 A 1.50015 1.50015 0 0 0 23 21.5 L 23 27.5 A 1.50015 1.50015 0 0 0 24.5 29 L 33.640625 29 C 31.81186 32.521902 28.257504 35 24 35 C 17.906545 35 13 30.093455 13 24 C 13 17.906545 17.906545 13 24 13 C 26.793517 13 29.316128 14.048958 31.261719 15.767578 A 1.50015 1.50015 0 0 0 33.314453 15.703125 L 37.558594 11.460938 A 1.50015 1.50015 0 0 0 37.515625 9.296875 C 33.963928 6.0194656 29.215208 4 24 4 z M 24 7 C 27.876681 7 31.382426 8.3558847 34.234375 10.542969 L 32.009766 12.765625 C 29.72402 11.127528 27.028271 10 24 10 C 19.144489 10 14.863998 12.49466 12.351562 16.263672 L 9.9492188 14.425781 C 13.006391 9.9422565 18.150107 7 24 7 z M 8.4902344 17.087891 L 10.970703 18.984375 C 10.366173 20.54688 10 22.227786 10 24 C 10 25.772214 10.366173 27.45312 10.970703 29.015625 L 8.4902344 30.912109 C 7.5486733 28.797675 7 26.468626 7 24 C 7 21.531374 7.5486733 19.202325 8.4902344 17.087891 z M 26 23 L 40.923828 23 C 40.94728 23.332305 41 23.669639 41 24 C 41 28.242861 39.399328 32.068246 36.839844 35.042969 L 34.498047 33.013672 C 35.780768 31.520965 36.868066 29.860261 37.433594 27.919922 A 1.50015 1.50015 0 0 0 35.994141 26 L 26 26 L 26 23 z M 12.351562 31.736328 C 14.863997 35.50534 19.144489 38 24 38 C 27.156227 38 30.066421 36.943786 32.410156 35.173828 L 34.677734 37.140625 C 31.754037 39.518047 28.072237 41 24 41 C 18.150107 41 13.006391 38.057744 9.9492188 33.574219 L 12.351562 31.736328 z"></path>
    </svg>
  );
}

function MountainIcon(props: { class: string }) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
