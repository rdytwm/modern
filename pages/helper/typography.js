import React from 'react'
import Layout from '../../layouts'

export default function Typography() {

  const fontFamily = () => {
    const array = []

    const font = ['roboto', 'poppins', 'noto', 'lato', 'montserrat']
    const size = ['100 | 300 | 400 | 500 | 700 | 900', '100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900', '100 | 200 | 300 | 400 | 500 | 600 | 700 | 600 | 800 | 900', '100 | 300 | 400 | 700 | 900', '100 | 200 | 300 | 400 | 600 | 700 | 800 | 900']

    for (let i = 0; i < font.length; i++) {
      array.push(
        <div class={'display-block margin-bottom-10 font-weight-500 font-size-19 font-family-' + font[i]}>font-family-{font[i]} | size weight {size[i]}</div>
      )
    }

    return array
  }

  const fontSize = () => {
    const array = []

    for (let i = 12; i < 31; i++) {
      array.push(
        <div class={'display-block margin-bottom-10 font-weight-500 font-family-roboto font-size-' + i}>font-size-{i}</div>
      )
    }

    return array
  }

  const fontWeight = () => {
    const array = []

    for (let i = 1; i < 10; i++) {
      array.push(
        <div class={'display-block margin-bottom-10 font-size-19 font-family-noto font-weight-' + (i*100)}>font-weight-{i*100}</div>
      )
    }

    return array
  }

  const element = () => {
    const array = []

    for (let i = 10; i < 121; i++) {      
      array.push(
        <div class={'col-sm-6 col-md-4 col-lg-3'}>
          <div class={'card rounded-4 padding-20 margin-bottom-20 shadow-' + i}>
            <span>shadow-{i}</span>
          </div>
        </div>
      )
    }

    return array
  }
  
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 margin-bottom-20">
            <div className="prettier">
              <h3 className="prettier__title">Helper - Typography [Font Family]</h3>
              <p>font family di include dari googlefonts</p>
              <code>.font-family-{'{vendor}'} vendor font [roboto, poppins, noto, lato, montserrat]</code>
            </div>
          </div>
          <div className="col-12">
            { fontFamily() }
          </div>
          <div className="col-12 margin-bottom-20">
            <div className="prettier">
              <h3 className="prettier__title">Helper - Typography [Font Weight]</h3>
              <p>typography dibuat dari ukuran 100 ~ 900</p>
              <code>.font-weight-{'{number}'} example[font-weight-500]</code>
            </div>
          </div>
          <div className="col-12">
            <div class={'display-block margin-bottom-10 font-size-19 font-family-noto font-weight-light'}>font-weight-light</div>
            <div class={'display-block margin-bottom-10 font-size-19 font-family-noto font-weight-bold'}>font-weight-bold</div>
            { fontWeight() }
          </div>
          <div className="col-12 margin-bottom-20">
            <div className="prettier">
              <h3 className="prettier__title">Helper - Typography [Font Size]</h3>
              <p>typography dibuat dari ukuran 10 sampai 120 px (pixel)</p>
              <code>.font-size-{'{number}'} example[font-size-10]</code>
            </div>
          </div>
          <div className="col-12">
            { fontSize() }
          </div>
        </div>
      </div>
    </Layout>
  )
}
