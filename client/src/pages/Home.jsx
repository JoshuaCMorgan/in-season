import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Filter from "../components/Filter";
import Selections from "../components/Selections";
import produceData from "../produceData";

export const Home = () => {
  const [produce, setProduce] = useState(produceData);

  const fetchData = async (query) => {
    try {
      const response = await axios.get("/api/v1/produce", { params: query });
      console.log(response);
      setProduce(response.data.produce);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <header>
        <Hero />
        <Filter filterProduce={fetchData} />
      </header>
      <main>
        <Selections produce={produce} />
      </main>
    </React.Fragment>
  );
};
