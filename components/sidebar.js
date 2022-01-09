import React from 'react';
export default function Sidebar(props) {
  return (
    <aside class="sidebar sidebar-wrapper sidebar-fixed-left sidebar-full-height sidebar-250">
      <ul class="sidebar-menu">
        <li class="sidebar-menu-list sidebar-menu-list-nested">
          <a href="/docs">
            <span>
              <i class="bi-book-half"></i> Docs
            </span>
            <i class="bi-chevron-down"></i>
          </a>
          <ul class="sidebar-menu sidebar-menu-open">
            <li class="sidebar-menu-list">
              <a href="/docs/getting-started">
                <span>Getting Started</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="sidebar-menu-list sidebar-menu-list-nested">
          <a href="/helper">
            <span>Helper</span>
            <i class="bi-chevron-down"></i>
          </a>
          <ul class="sidebar-menu sidebar-menu-open">
            <li class="sidebar-menu-list">
              <a href="/helper/color">
                <span>Color</span>
              </a>
            </li>
            <li class="sidebar-menu-list">
              <a href="/helper/typography">
                <span>Typography</span>
              </a>
            </li>
            <li class="sidebar-menu-list">
              <a href="/helper/rounded">
                <span>Rounded</span>
              </a>
            </li>
            <li class="sidebar-menu-list">
              <a href="/helper/padding">
                <span>Padding</span>
              </a>
            </li>
            <li class="sidebar-menu-list">
              <a href="/helper/margin">
                <span>Margin</span>
              </a>
            </li>
            <li class="sidebar-menu-list">
              <a href="/helper/shadow">
                <span>Shadow</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="sidebar-menu-list sidebar-menu-list-nested">
          <a href="/layout">
            <span>Layouts</span>
            <i class="bi-chevron-down"></i>
          </a>
          <ul class="sidebar-menu sidebar-menu-open">
            <li class="sidebar-menu-list">
              <a href="/layout/grid">
                <span>Grid</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="sidebar-menu-list sidebar-menu-list-nested">
          <a href="/component">
            <span>Component</span>
            <i class="bi-chevron-down"></i>
          </a>
          <ul class="sidebar-menu sidebar-menu-open">
            <li class="sidebar-menu-list">
              <a href="/component/navbar">
                <span>Navbar</span>
              </a>
            </li>
            <li class="sidebar-menu-list">
              <a href="/component/button">
                <span>Button</span>
              </a>
            </li>
            <li class="sidebar-menu-list">
              <a href="/component/hero">
                <span>Hero</span>
              </a>
            </li>
            <li class="sidebar-menu-list">
              <a href="/component/card">
                <span>Card</span>
              </a>
            </li>
            <li class="sidebar-menu-list">
              <a href="/component/alert">
                <span>Alert</span>
              </a>
            </li>
            <li class="sidebar-menu-list">
              <a href="/component/accordion">
                <span>Accordion</span>
              </a>
            </li>
            <li class="sidebar-menu-list">
              <a href="/component/badge">
                <span>Badge</span>
              </a>
            </li>
            <li class="sidebar-menu-list">
              <a href="/component/breadcumb">
                <span>Breadcumb</span>
              </a>
            </li>
            <li class="sidebar-menu-list">
              <a href="/component/dropdown">
                <span>Dropdown</span>
              </a>
            </li>
            <li class="sidebar-menu-list">
              <a href="/component/list">
                <span>List</span>
              </a>
            </li>
            <li class="sidebar-menu-list">
              <a href="/component/modal">
                <span>Modal</span>
              </a>
            </li>
            <li class="sidebar-menu-list">
              <a href="/component/nav">
                <span>Nav</span>
              </a>
            </li>
            <li class="sidebar-menu-list">
              <a href="/component/tab">
                <span>Tab</span>
              </a>
            </li>
            <li class="sidebar-menu-list">
              <a href="/component/pagination">
                <span>Pagination</span>
              </a>
            </li>
            <li class="sidebar-menu-list">
              <a href="/component/placeholder">
                <span>Placeholder</span>
              </a>
            </li>
            <li class="sidebar-menu-list">
              <a href="/component/spiner">
                <span>Spiner</span>
              </a>
            </li>
            <li class="sidebar-menu-list">
              <a href="/component/progress">
                <span>Progress</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="sidebar-menu-list">
          <a href="/Utils">
            <span>Utils</span>
          </a>
        </li>
        <li class="sidebar-menu-list">
          <a href="/Utils">
            <span>Icon</span>
          </a>
        </li>
      </ul>
    </aside>
  )
}