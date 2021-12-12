import React from 'react';
export default function Sidebar(props) {
  return (
    <aside class="sidebar sidebar--wrapper sidebar--fixed-left sidebar--full-height sidebar--250">
      <ul class="sidebar__menu">
        <li class="sidebar__menu__list sidebar__menu__list--nested">
          <a href="/layout">
            <span>Layouts</span>
          </a>
          <ul class="sidebar__menu">
            <li class="sidebar__menu__list">
              <a href="/component/navbar">
                <span>Grid</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="sidebar__menu__list sidebar__menu__list--nested">
          <a href="/component">
            <span>Component</span>
          </a>
          <ul class="sidebar__menu">
            <li class="sidebar__menu__list">
              <a href="/component/navbar">
                <span>Navbar</span>
              </a>
            </li>
            <li class="sidebar__menu__list">
              <a href="/component/button">Button</a>
            </li>
            <li class="sidebar__menu__list">
              <a href="/component/hero">Hero</a>
            </li>
            <li class="sidebar__menu__list">
              <a href="/component/card">Card</a>
            </li>
            <li class="sidebar__menu__list">
              <a href="/component/alert">Alert</a>
            </li>
            <li class="sidebar__menu__list">
              <a href="/component/accordion">Accordion</a>
            </li>
            <li class="sidebar__menu__list">
              <a href="/component/badge">Badge</a>
            </li>
            <li class="sidebar__menu__list">
              <a href="/component/breadcumb">Breadcumb</a>
            </li>
            <li class="sidebar__menu__list">
              <a href="/component/dropdown">Dropdown</a>
            </li>
            <li class="sidebar__menu__list">
              <a href="/component/list">List</a>
            </li>
            <li class="sidebar__menu__list">
              <a href="/component/modal">Modal</a>
            </li>
            <li class="sidebar__menu__list">
              <a href="/component/nav">Nav</a>
            </li>
            <li class="sidebar__menu__list">
              <a href="/component/tab">Tab</a>
            </li>
            <li class="sidebar__menu__list">
              <a href="/component/pagination">Pagination</a>
            </li>
            <li class="sidebar__menu__list">
              <a href="/component/placeholder">Placeholder</a>
            </li>
            <li class="sidebar__menu__list">
              <a href="/component/spiner">Spiner</a>
            </li>
            <li class="sidebar__menu__list">
              <a href="/component/progress">Progress</a>
            </li>
          </ul>
        </li>
        <li class="sidebar__menu__list">
          <a href="/helper">Helper</a>
        </li>
        <li class="sidebar__menu__list">
          <a href="/Utils">Utils</a>
        </li>
        <li class="sidebar__menu__list">
          <a href="/Utils">Icon</a>
        </li>
      </ul>
    </aside>
  )
}