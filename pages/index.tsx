import type { NextPageWithLayout } from "next";
import LayoutDefault from "#/layouts/default/index";
import { useEffect, useState } from "react";
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

const Home: NextPageWithLayout = () => {
  return <>hi Home</>;
};

export default Home;

Home.getLayout = function (page: any) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  return (
    <LayoutDefault>
      <Home>{page}</Home>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </LayoutDefault>
  );
};
