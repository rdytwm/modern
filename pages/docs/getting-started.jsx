import React from 'react'
import Layout from '../../layouts'

export default function gettingStarted() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 margin-bottom-10">
            <div className="prettier">
              <h3 className="prettier-title">
                Use Content Delivery Network (CDN)
              </h3>
              <p>beta verison 0.0.4</p>
              <code>
                {
                  '<link rel="stylesheet" href="https://moodern.netlify.com/css/app.css"/>'
                }
              </code>
            </div>
          </div>
          <div className="col-12 margin-bottom-10">
            <div className="prettier">
              <h3 className="prettier-title">Template</h3>
              <p>Starter Template Structure</p>
              <code>
                {`
                  <!doctype html>
                  <html lang="en">
                    <head>
                      <meta charset="utf-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1">
                      <link rel="stylesheet" href="https://moodern.netlify.com/css/app.css"/>
                      <title>ModernUI</title>
                    </head>
                    <body>
                      <h1>ModernUI</h1>
                    </body>
                  </html>
                  `}
              </code>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
