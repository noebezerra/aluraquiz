import Head from 'next/head';
import React from 'react';

const HtmlHead = ({ db }) => {
  return (
    <Head>
      <meta charset="utf-8" />
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
      <meta property="og:image" content={db.bg} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="640" />
      <meta property="og:image:height" content="442" />
      <meta property="og:type" content="website" />
      <link rel="shortcut icon" href={db.icon} />
    </Head>
  );
};

export default HtmlHead;
