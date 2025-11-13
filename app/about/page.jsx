import React from "react";
import { Hero } from "./components/Hero";
import Job from "./components/Job";
import FAQ from "./components/FAQ";
import { Benefit } from "./components/Benefit";

const Page = () => {
  return (
    <>
      <Hero />
      <Job />
      <Benefit />
      <FAQ />
    </>
  );
};

export default Page;
