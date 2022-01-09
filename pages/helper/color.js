import React from 'react'
import Layout from '../../layouts'

export default function Margin() {

  const elementText = () => {
    const array = []
    const colorLabel = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark']
    const color = ['blue', 'indigo', 'purple', 'orange', 'gray', 'teal', 'cyan', 'green', 'red', 'yellow', 'pink']

    for (let i = 0; i < colorLabel.length; i++) {
      array.push(
          <span class={'display-inline-block margin-right-15 margin-bottom-10 rounded-6 color-' + colorLabel[i]}>
            color-{colorLabel[i]}
          </span>
      )
    }

    for (let i = 0; i < color.length; i++) {
      array.push(
          <span class={'display-inline-block margin-right-15 margin-bottom-10 rounded-6 color-' + color[i]}>
            color-{color[i]}
          </span>
      )
    }

    return array
  }

  const element = () => {
    const array = []
    const colorLabel = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark']
    const color = ['blue', 'indigo', 'purple', 'orange', 'gray', 'teal', 'cyan', 'green', 'red', 'yellow', 'pink']

    for (let i = 0; i < colorLabel.length; i++) {
      array.push(
        <div class={'col-sm-6 col-md-4 col-lg-3'}>
          <div class={'card shadow-6 margin-bottom-15 padding-20 rounded-6 background-color-' + colorLabel[i]}>
            <span>{colorLabel[i]}</span>
          </div>
        </div>
      )
    }

    for (let i = 0; i < color.length; i++) {
      array.push(
        <div class={'col-sm-6 col-md-4 col-lg-3'}>
          <div class={'card shadow-6 margin-bottom-15 padding-20 rounded-6 background-color-' + color[i]}>
            <span>{color[i]}</span>
          </div>
        </div>
      )
    }

    return array
  }

  const element2 = () => {
    const array = []
    const color = ['blue', 'indigo', 'purple', 'orange', 'gray', 'teal', 'cyan', 'green', 'red', 'yellow', 'pink']

    for (let i = 0; i < color.length; i++) {
      array.push(
        <div class={'col-sm-6 col-md-4 col-lg-3 margin-bottom-20'}>
          {[1,2,3,4,5,6,7,8,9].map((index, value) => (
            <div class={'padding-20 background-color-' + color[i] + '' + index*100}>
              <span>{color[i]}{index*100}</span>
            </div>
          ))}
        </div>
      )
    }

    return array
  }

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 margin-bottom-10">
            <div className="prettier">
              <h3 className="prettier-title">Helper - Text Color</h3>
              <p>Color berdasarkan label</p>
              <code>.color-{'{label}'} [example] .color-primary</code>
            </div>
          </div>
          <div className="col-12 margin-bottom-10">
            { elementText() }
          </div>
          <div className="col-12 margin-bottom-20">
            <div className="prettier">
              <h3 className="prettier-title">Helper - Background Color</h3>
              <p>Label color or Theme for Text & Background</p>
              <code>.background-color-{'{label}'} [example] .background-color-primary</code>
            </div>
          </div>
          { element() }
          <div className="col-12 margin-bottom-20">
            <div className="prettier">
              <h3 className="prettier-title">Helper - Color Steper</h3>
              <p>color dibuat dengan contrast 100 - 900</p>
              <code>.color-{'{nama_color}{optional_contras}'} [example] .background-color-blue100</code>
            </div>
          </div>
          { element2() }
        </div>
      </div>
    </Layout>
  )
}
