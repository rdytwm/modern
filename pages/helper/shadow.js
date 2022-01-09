import React from 'react'
import Layout from '../../layouts'

export default function Shadow() {

  const element = () => {
    const array = []

    for (let i = 1; i < 8; i++) {      
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
              <h3 className="prettier__title">Helper - Shadow</h3>
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
