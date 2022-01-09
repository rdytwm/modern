import React from 'react'
import Layout from '../../layouts'

export default function Padding() {

  const element = () => {
    const array = []

    for (let i = 0; i < 41; i++) {      
      array.push(
        <div class={'col-sm-6 col-md-4 col-lg-3'}>
          <div class={'card shadow-6 rounded-8 margin-bottom-20 padding-' + i}>
            <span>padding-{i}</span>
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
              <h3 className="prettier__title">Helper - Padding</h3>
              <p>padding dibuat dari ukuran 0 sampai 40 px (pixel) dan bisa dipakai di semua arah dengan panggilan attribute class</p>
              <code>.padding-{'{pixel}'} .padding-{'{arah}'}-{'{pixel}'}</code>
            </div>
          </div>
          { element() }
        </div>
      </div>
    </Layout>
  )
}
