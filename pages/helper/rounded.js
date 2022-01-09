import React from 'react'
import Layout from '../../layouts'

export default function Rounded() {

  const element = () => {
    const array = []

    for (let i = 0; i < 41; i++) {      
      array.push(
        <div class={'col-sm-6 col-md-4 col-lg-3'}>
          <div class={'card padding-20 margin-bottom-20 shadow-6 rounded-' + i}>
            <span>rounded-{i}</span>
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
              <h3 className="prettier__title">Helper - Rounded</h3>
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
