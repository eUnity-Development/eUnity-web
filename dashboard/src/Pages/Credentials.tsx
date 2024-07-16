import { Card, CardContent, CardHeader } from "@suid/material";
import { Component, For } from "solid-js";
import PasswordCard from "../components/PasswordCard";

const Credentials: Component<{}> = (props) => {

    const testData = [
        {
          site: "test.com",
          email: "test@gmail.com",
          password: "password",
          url: "https://test.com",
        },
        {
          site: "test.com",
          email: "test2@gmail.com",
          password: "password2",
          url: "https://test2.com",
        },
        {
          site: "test.com",
          email: "test3@gmail.com",
          password: "password3",
          url : "https://test3.com"
        }
      ]
  
  return   <Card class="p-4 m-4">
  <CardHeader
    classes={{
      root: "text-black font-bold text-xl",
    }}
    title="Credentials"
  />
  <CardContent>
  <For each={testData}>
    {(item : any) => (
      <>
      <PasswordCard
        site={item.site}
        email={item.email}
        password={item.password}
        url={item.url}
      />
      <hr />
      </>
    )}
  </For>
  </CardContent>
</Card>;
};

export default Credentials;