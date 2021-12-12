import React from 'react';

import Layout from '../../layouts'

export default function Button() {
  return (
    <Layout>
      <div className="container">
        <div className="col-12 margin-bottom--20">
          <div className="prettier">
            <h3 className="prettier__title">Button Color</h3>
            <p>button color class</p>
            <code>.button</code>
          </div>
          <div className="d-flex flex-space--10 align-items-center">
            <button class="button button--primary">button--primary</button>
            <button class="button button--info">button--info</button>
            <button class="button button--danger">button--danger</button>
            <button class="button button--warning">button--warning</button>
          </div>
        </div>
        <div className="col-12 margin-bottom--20">
          <div className="prettier">
            <h3 className="prettier__title">Button Outline</h3>
            <p>button outline class</p>
            <code>.button-outline .button-outline--primary</code>
          </div>
          <div className="d-flex flex-space--10 align-items-center">
            <button class="button button-outline">button-outline--primary</button>
            <button class="button button-outline button-outline--primary">button-outline--primary</button>
            <button class="button button-outline button-outline--info">button-outline--info</button>
            <button class="button button-outline button-outline--danger">button-outline--danger</button>
            <button class="button button-outline button-outline--warning">button-outline--warning</button>
          </div>
        </div>
        <div className="col-12 margin-bottom--20">
          <div className="prettier">
            <h3 className="prettier__title">Button Rounded</h3>
            <p>button color class</p>
            <code>.button--rounded</code>
          </div>
          <div className="d-flex flex-space--10 align-items-center">
            <button class="button button--primary button--rounded">button--rounded</button>
            <button class="button button--info button--rounded">button--rounded</button>
            <button class="button button--danger button--rounded">button--rounded</button>
            <button class="button button--warning button--rounded">button--rounded</button>
          </div>
        </div>
        <div className="col-12 margin-bottom--20">
          <div className="prettier">
            <h3 className="prettier__title">Button Sizing</h3>
            <p>button color class</p>
            <code>.button--xl .button--sm .button--md</code>
          </div>
          <div className="d-flex flex-space--10 align-items-center">
            <button class="button button--primary">button</button>
            <button class="button button--info button--sm">button--sm</button>
            <button class="button button--danger button--lg">button--lg</button>
            <button class="button button--warning button--xl">button--xl</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}