import React from "react";
import Header from "./Header";
import { Welcome } from "./Welcome";
import { AboutBJJ } from "./AboutBJJ";

export const App = () => {
  return (
    <div>
      <Header></Header>
      <Welcome></Welcome>
      <AboutBJJ></AboutBJJ>
    </div>
  );
};
