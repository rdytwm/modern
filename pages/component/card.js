import React from 'react';
import Layout from '../../layouts'

export default function Card() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 margin-bottom-20">
            <div className="prettier">
              <h3 className="prettier-title">Card Default</h3>
              <p>Card component best filx</p>
              <code>.card > .card-title .card-body > .card-body-description</code>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 margin-bottom-20">
            <div class="card shadow-1">
              <div class="card-title">Hello World</div>
              <div class="card-body">
                <p class="card-body-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore unde, reprehenderit ipsam voluptas repudiandae delectus cum numquam eligendi provident ex, dolorum, at praesentium neque laborum nesciunt nisi ullam facere!</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 margin-bottom-20">
            <div class="card background-color-blue300 shadow-2">
              <div class="card-title">Hello World</div>
              <div class="card-body">
                <p class="card-body-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore unde, reprehenderit ipsam voluptas repudiandae delectus cum numquam eligendi provident ex, dolorum, at praesentium neque laborum nesciunt nisi ullam facere!</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 margin-bottom-20">
            <div class="card background-color-orange300 shadow-3">
              <div class="card-title">Hello World</div>
              <div class="card-body">
                <p class="card-body-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore unde, reprehenderit ipsam voluptas repudiandae delectus cum numquam eligendi provident ex, dolorum, at praesentium neque laborum nesciunt nisi ullam facere!</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 margin-bottom-20">
            <div class="card background-color-red300 shadow-4">
              <div class="card-title">Hello World</div>
              <div class="card-body">
                <p class="card-body-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore unde, reprehenderit ipsam voluptas repudiandae delectus cum numquam eligendi provident ex, dolorum, at praesentium neque laborum nesciunt nisi ullam facere!</p>
              </div>
            </div>
          </div>
          <div className="col-12 margin-bottom-20">
            <div className="prettier">
              <h3 className="prettier-title">Card With Image</h3>
              <p>Card component best filx</p>
              <code>.card > .card-image .card-title .card-body > .card-body-description</code>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 margin-bottom-20">
            <div class="card shadow-7">
              <picture class="card-image">
                <img src="https://cdn.dribbble.com/users/7072315/screenshots/17225032/media/72f18996f1fc343b32596023994ef0a1.png?compress=1&resize=1200x900&vertical=top" alt="avatar"/>
              </picture>
              <h3 class="card-title">Hello World</h3>
              <div class="card-body">
                <p class="card-body-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore unde, reprehenderit ipsam voluptas repudiandae delectus cum numquam eligendi provident</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 margin-bottom-20">
            <div class="card shadow-7">
              <div class="card-preview" style={{backgroundImage: "url('https://cdna.iconscout.com/production/img/8c962ea.png?w=312&h=0&f=png')"}}>
                <div class="card-preview-feature card-preview-feature-dark card-preview-feature-bottom">
                  <span class="badge d-block">Price</span>
                  <span class="badge d-block">%discount</span>
                </div>
              </div>
              <div class="card-title">Hello World</div>
              <div class="card-body">
                <p class="card-body-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore unde, reprehenderit ipsam voluptas repudiandae delectus cum numquam eligendi provident</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 margin-bottom-20">
            <div class="card shadow-7">
              <div class="card-preview" style={{backgroundImage: "url('https://cdna.iconscout.com/production/img/8c962ea.png?w=312&h=0&f=png')"}}>
                <div class="card-preview-feature card-preview-feature-dark card-preview-feature-top">
                  <span class="badge d-block">Price</span>
                  <span class="badge d-block">%discount</span>
                </div>
              </div>
              <div class="card-title">Hello World</div>
              <div class="card-body">
                <p class="card-body-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore unde, reprehenderit ipsam voluptas repudiandae delectus cum numquam eligendi provident</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 margin-bottom-20">
            <div class="card shadow-7">
              <div class="card-preview mouse-over" style={{backgroundImage: "url('https://cdna.iconscout.com/production/img/8c962ea.png?w=312&h=0&f=png')"}}>
                <div class="card-preview-feature card-preview-feature-dark card-preview-feature-top mouse-over-display mouse-over-top">
                  <span class="badge d-block">Price</span>
                  <span class="badge d-block">%discount</span>
                </div>
              </div>
              <div class="card-title">Mouse Over</div>
              <div class="card-body">
                <p class="card-body-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore unde, reprehenderit ipsam voluptas repudiandae delectus cum numquam eligendi provident</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}