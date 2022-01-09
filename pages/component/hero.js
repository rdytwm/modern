import React from 'react';
import Layout from '../../layouts'

export default function Card() {
  return (
    <Layout>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>Hero</h1>
            <div class="hero background-color-gray200">
              <h2 class="hero-title">We Am Hero</h2>
              <h5 class="hero-slug">Slug Hero</h5>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}