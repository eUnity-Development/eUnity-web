import { Component, createSignal } from "solid-js";

import {
  Card,
  CardContent,
  CardHeader,
  Button,
  TextField,
  Input,
  InputAdornment,
  Popover,
  Typography,
  Link,
} from "@suid/material";
import Toast from "./Toast";

const PasswordCard: Component<{
  email: string;
  password: string;
  site: string;
  url: string;
}> = (props) => {
  let passwordID = uuidv4();
  let emailID = uuidv4();

  const copyEmail = async () => {
    //apped toast element to the dom
    //get the position of the email and then put it under it and to the left
    let email = document.getElementById(emailID);
    //copy email to clipboard
    let emailValue = email?.getAttribute("value");
    if (!emailValue) {
      return;
    }
    navigator.clipboard.writeText(emailValue);


    let position = email?.getBoundingClientRect();

    if (!position) {
      return;
    }

    let id = uuidv4();

    const toast = (
      <Toast
        position={{ top: position.bottom, left: position?.left + 5 }}
        message="Email copied to clipboard!"
        duration={2000}
        id={id}
      />
    ) as any;

    document.body.appendChild(toast());

    let toastElement = document.getElementById(id);
    if (toastElement) {
      //change opacity to 1
      toastElement.style.opacity = "1";

      //wait two seconds and then change opacity to 0, then remove
      setTimeout(() => {
        toastElement.style.opacity = "0";
        setTimeout(() => {
          toastElement.remove();
        }, 500);
      }, 2000);
    }
  };

  const copyPassword = () => {
    //apped toast element to the dom

    let password = document.getElementById(passwordID);
    //copy email to clipboard
    let passwordValue = password?.getAttribute("value");
    if (!passwordValue) {
      return;
    }
    navigator.clipboard.writeText(passwordValue);


    let position = password?.getBoundingClientRect();

    if (!position) {
      return;
    }


    let id = uuidv4();
    const toast = (
      <Toast
        position={{ top: position.bottom, left: position?.left + 5 }}
        message="Password copied to clipboard!"
        duration={2000}
        id={id}
      />
    ) as any;

    document.body.appendChild(toast());
    let toastElement = document.getElementById(id);
    if (toastElement) {
        //change opacity to 1
        toastElement.style.opacity = "1";
  
        //wait two seconds and then change opacity to 0, then remove
        setTimeout(() => {
          toastElement.style.opacity = "0";
          setTimeout(() => {
            toastElement.remove();
          }, 500);
        }, 2000);
      }



  };

  return (
    <div class="grid gap-6 p-4">
      <div class="grid gap-2">
        <div class="flex items-center justify-between">
          <Link
            class="font-medium !text-gray-900 outline-none"
            href={props.url}
            target="_blank"
          >
            <span>{props.site}</span>
          </Link>
          <div class="flex items-center gap-2">
            <TextField
              value={props.email}
              size="small"
              InputProps={{
                id: emailID,
                readOnly: true,
                endAdornment: (
                  <InputAdornment
                    class="w-4 h-4 display: flex items-center justify-center"
                    position="end"
                  >
                    <Button
                      onClick={copyEmail}
                      class="!w-4 !m-0 !p-0"
                      size="small"
                      variant="text"
                    >
                      <CopyIcon class="w-4 h-4" />
                      <span class="sr-only">Copy email</span>
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <div class="flex items-center justify-between">
          <span class="font-medium">Password</span>
          <div class="relative flex items-center gap-2">
            <TextField
              value={props.password}
              size="small"
              InputProps={{
                readOnly: true,
                type: "password",
                id: passwordID,
                endAdornment: (
                  <InputAdornment
                    class="w-4 h-4 display: flex items-center justify-center"
                    position="end"
                  >
                    <Button
                      onClick={copyPassword}
                      class="!w-4 !m-0 !p-0"
                      size="small"
                      variant="text"
                    >
                      <CopyIcon class="w-4 h-4" />
                      <span class="sr-only">Copy email</span>
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordCard;

function CopyIcon(props: { class: string }) {
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
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function EyeIcon(props: { class: string }) {
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      +c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
    ).toString(16)
  );
}
