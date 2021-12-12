import React from 'react';
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Sidebar from '../components/Sidebar'


export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap-reboot.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>
      </Head>
      <Navbar/>
      <Sidebar/>
      <main class="push--left-250">
        {props.children}
      </main>
      <Footer/>
    </>
  )
}