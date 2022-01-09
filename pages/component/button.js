import React from 'react';
import Layout from '../../layouts'

export default function Button() {
  return (
    <Layout>
      <div className="container">
        <div className="col-12 margin-bottom-20">
          <div className="prettier">
            <h3 className="prettier-title">Button Text</h3>
            <p>button text clean class</p>
            <code>.button-text .text-color-primary .text-color-info .text-color-danger .text-color-warning</code>
          </div>
          <div className="display-flex gap-10 align-items-center">
            <button class="button button-text">button-text</button>
            <button class="button button-text text-color-dark">button-text</button>
            <button class="button button-text text-color-primary">button-text</button>
            <button class="button button-text text-color-info">button-text</button>
            <button class="button button-text text-color-danger">button-text</button>
            <button class="button button-text text-color-warning">button-text</button>
          </div>
        </div>
        <div className="col-12 margin-bottom-20">
          <div className="prettier">
            <h3 className="prettier-title">Button Group</h3>
            <p>button flex group</p>
            <code>.button-group</code>
          </div>
          <div className="display-flex gap-10 align-items-center">
            <button class="button button-dark">
              <span>Text</span>
            </button>
          </div>
        </div>
        <div className="col-12 margin-bottom-20">
          <div className="prettier">
            <h3 className="prettier-title">Button Color</h3>
            <p>button color class</p>
            <code>.button</code>
          </div>
          <div className="display-flex gap-10 align-items-center">
            <button class="button">button-default</button>
            <button class="button button-dark">button-dark</button>
            <button class="button button-primary">button-primary</button>
            <button class="button button-info">button-info</button>
            <button class="button button-danger">button-danger</button>
            <button class="button button-warning">button-warning</button>
          </div>
        </div>
        <div className="col-12 margin-bottom-20">
          <div className="prettier">
            <h3 className="prettier-title">Button Outline</h3>
            <p>button outline class</p>
            <code>.button-outline .button-outline-primary</code>
          </div>
          <div className="display-flex gap-10 align-items-center">
            <button class="button button-outline">button-outline</button>
            <button class="button button-outline-dark">button-outline</button>
            <button class="button button-outline-primary">button-outline</button>
            <button class="button button-outline-info">button-outline</button>
            <button class="button button-outline-danger">button-outline</button>
            <button class="button button-outline-warning">button-outline</button>
          </div>
        </div>
        <div className="col-12 margin-bottom-20">
          <div className="prettier">
            <h3 className="prettier-title">Button Rounded</h3>
            <p>button color class</p>
            <code>.button-rounded</code>
          </div>
          <div className="display-flex gap-10 align-items-center">
            <button class="button button-primary button-rounded">button-rounded</button>
            <button class="button button-info button-rounded">button-rounded</button>
            <button class="button button-danger button-rounded">button-rounded</button>
            <button class="button button-warning button-rounded">button-rounded</button>
          </div>
        </div>
        <div className="col-12 margin-bottom-20">
          <div className="prettier">
            <h3 className="prettier-title">Button Sizing</h3>
            <p>button color class</p>
            <code>.button-xl .button-sm .button-md</code>
          </div>
          <div className="display-flex gap-10 align-items-center">
            <button class="button button-primary">button</button>
            <button class="button button-info button-md">button-sm</button>
            <button class="button button-danger button-lg">button-lg</button>
            <button class="button button-warning button-xl">button-xl</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}