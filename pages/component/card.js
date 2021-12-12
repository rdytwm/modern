import React from 'react';
import Layout from '../../layouts'

export default function Card() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 margin-bottom--20">
            <div className="prettier">
              <h3 className="prettier__title">Card Default</h3>
              <p>Card component best filx</p>
              <code>.navbar-container</code>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 margin-bottom--20">
            <div class="card shadow-1">
              <div class="card__title">Hello World</div>
              <div class="card__body">
                <p class="card__body__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore unde, reprehenderit ipsam voluptas repudiandae delectus cum numquam eligendi provident ex, dolorum, at praesentium neque laborum nesciunt nisi ullam facere!</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 margin-bottom--20">
            <div class="card card--primary shadow-2">
              <div class="card__title">Hello World</div>
              <div class="card__body">
                <p class="card__body__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore unde, reprehenderit ipsam voluptas repudiandae delectus cum numquam eligendi provident ex, dolorum, at praesentium neque laborum nesciunt nisi ullam facere!</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 margin-bottom--20">
            <div class="card card--secondary shadow-3">
              <div class="card__title">Hello World</div>
              <div class="card__body">
                <p class="card__body__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore unde, reprehenderit ipsam voluptas repudiandae delectus cum numquam eligendi provident ex, dolorum, at praesentium neque laborum nesciunt nisi ullam facere!</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 margin-bottom--20">
            <div class="card card--info shadow-4">
              <div class="card__title">Hello World</div>
              <div class="card__body">
                <p class="card__body__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore unde, reprehenderit ipsam voluptas repudiandae delectus cum numquam eligendi provident ex, dolorum, at praesentium neque laborum nesciunt nisi ullam facere!</p>
              </div>
            </div>
          </div>
          <div className="col-12 margin-bottom--20">
            <div className="prettier">
              <h3 className="prettier__title">Card With Image</h3>
              <p>Card component best filx</p>
              <code>.navbar-container</code>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 margin-bottom--20">
            <div class="card shadow-7">
              <picture class="card__image">
                <img src="https://img.myloview.es/posters/colorful-background-cubism-art-style-abstract-portrait-700-226639679.jpg" alt="avatar"/>
              </picture>
              <h3 class="card__title">Hello World</h3>
              <div class="card__body">
                <p class="card__body__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore unde, reprehenderit ipsam voluptas repudiandae delectus cum numquam eligendi provident ex, dolorum, at praesentium neque laborum nesciunt nisi ullam facere!</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 margin-bottom--20">
            <div class="card shadow-7">
              <div class="card__preview" style={{backgroundImage: "url('https://img.myloview.es/posters/colorful-background-cubism-art-style-abstract-portrait-700-226639679.jpg')"}}>
                <div class="card__preview__feature card__preview__feature--dark card__preview__feature--bottom">
                  <span class="badge d-block">Price</span>
                  <span class="badge d-block">%discount</span>
                </div>
              </div>
              <div class="card__title">Hello World</div>
              <div class="card__body">
                <p class="card__body__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore unde, reprehenderit ipsam voluptas repudiandae delectus cum numquam eligendi provident ex, dolorum, at praesentium neque laborum nesciunt nisi ullam facere!</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 margin-bottom--20">
            <div class="card shadow-7">
              <div class="card__preview" style={{backgroundImage: "url('https://img.myloview.es/posters/colorful-background-cubism-art-style-abstract-portrait-700-226639679.jpg')"}}>
                <div class="card__preview__feature card__preview__feature--dark card__preview__feature--top">
                  <span class="badge d-block">Price</span>
                  <span class="badge d-block">%discount</span>
                </div>
              </div>
              <div class="card__title">Hello World</div>
              <div class="card__body">
                <p class="card__body__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore unde, reprehenderit ipsam voluptas repudiandae delectus cum numquam eligendi provident ex, dolorum, at praesentium neque laborum nesciunt nisi ullam facere!</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 margin-bottom--20">
            <div class="card shadow-7">
              <div class="card__preview mouse-over" style={{backgroundImage: "url('https://img.myloview.es/posters/colorful-background-cubism-art-style-abstract-portrait-700-226639679.jpg')"}}>
                <div class="card__preview__feature card__preview__feature--dark card__preview__feature--top mouse-over__display mouse-over--top">
                  <span class="badge d-block">Price</span>
                  <span class="badge d-block">%discount</span>
                </div>
              </div>
              <div class="card__title">Mouse Over</div>
              <div class="card__body">
                <p class="card__body__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore unde, reprehenderit ipsam voluptas repudiandae delectus cum numquam eligendi provident ex, dolorum, at praesentium neque laborum nesciunt nisi ullam facere!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}