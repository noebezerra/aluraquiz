import Head from 'next/head';
import React from 'react';

const HtmlHead = ({ db }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta property="og:locale" content="pt_BR"></meta>
      <meta
        property="og:url"
        content="https://aluraquiz.noebezerra.vercel.app/"
      ></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{db.title}</title>
      <meta property="og:title" content={db.title} />
      <meta property="og:site_name" content={db.title} />
      <meta property="og:description" content={db.description} />
      <meta property="og:image" content={db.bgUrl} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="640" />
      <meta property="og:image:height" content="442" />
      <meta property="og:type" content="website" />
      <link rel="shortcut icon" href={db.ico} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
};

export default HtmlHead;
