import React, { Component } from 'react';
import Menu from '../Menu/Menu';
export default class Course extends Component {
    render(){
        return(
          <div>
            <Menu></Menu>
          <div className="dashboard__main">
            <div className="dashboard__content bg-light-4">
              <div className="row pb-50 mb-10">
                <div className="col-auto">
                  <h1 className="text-30 lh-12 fw-700">My Courses</h1>
                  <div className="mt-10">Lorem ipsum dolor sit amet, consectetur.</div>
                </div>
              </div>
              <div className="row y-gap-30">
                <div className="col-12">
                  <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                    <div className="tabs -active-purple-2 js-tabs">
                      <div className="tabs__controls d-flex items-center pt-20 px-30 border-bottom-light js-tabs-controls">
                        <button className="text-light-1 lh-12 tabs__button js-tabs-button is-active" data-tab-target=".-tab-item-1" type="button">
                          All Courses
                        </button>
                        <button className="text-light-1 lh-12 tabs__button js-tabs-button ml-30" data-tab-target=".-tab-item-2" type="button">
                          Finished
                        </button>
                        <button className="text-light-1 lh-12 tabs__button js-tabs-button ml-30" data-tab-target=".-tab-item-3" type="button">
                          Not enrolled
                        </button>
                      </div>
                      <div className="tabs__content py-30 px-30 js-tabs-content">
                        <div className="tabs__pane -tab-item-1 is-active">
                          <div className="row y-gap-10 justify-between">
                            <div className="col-auto">
                              <form className="search-field border-light rounded-8 h-50" action="https://creativelayers.net/themes/educrat-html/post">
                                <input className="bg-white -dark-bg-dark-2 pr-50" type="text" placeholder="Search Courses" />
                                <button className type="submit">
                                  <i className="icon-search text-light-1 text-20" />
                                </button>
                              </form>
                            </div>
                            <div className="col-auto">
                              <div className="d-flex flex-wrap y-gap-10 x-gap-20">
                                <div>
                                  <div className="dropdown js-dropdown js-category-active">
                                    <div className="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-2 border-light rounded-8 px-20 py-10 text-14 lh-12" data-el-toggle=".js-category-toggle" data-el-toggle-active=".js-category-active">
                                      <span className="js-dropdown-title">Categories</span>
                                      <i className="icon text-9 ml-40 icon-chevron-down" />
                                    </div>
                                    <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle">
                                      <div className="text-14 y-gap-15 js-dropdown-list">
                                        <div><a href="#" className="d-block js-dropdown-link">Animation</a></div>
                                        <div><a href="#" className="d-block js-dropdown-link">Design</a></div>
                                        <div><a href="#" className="d-block js-dropdown-link">Illustration</a></div>
                                        <div><a href="#" className="d-block js-dropdown-link">Business</a></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="dropdown js-dropdown js-review-active">
                                    <div className="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-2 border-light rounded-8 px-20 py-10 text-14 lh-12" data-el-toggle=".js-review-toggle" data-el-toggle-active=".js-review-active">
                                      <span className="js-dropdown-title">Old Review</span>
                                      <i className="icon text-9 ml-40 icon-chevron-down" />
                                    </div>
                                    <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-review-toggle">
                                      <div className="text-14 y-gap-15 js-dropdown-list">
                                        <div><a href="#" className="d-block js-dropdown-link">Animation</a></div>
                                        <div><a href="#" className="d-block js-dropdown-link">Design</a></div>
                                        <div><a href="#" className="d-block js-dropdown-link">Illustration</a></div>
                                        <div><a href="#" className="d-block js-dropdown-link">Business</a></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row y-gap-30 pt-30">
                            <div className="w-1/5 xl:w-1/3 lg:w-1/2 sm:w-1/1">
                              <div className="relative">
                                <img className="rounded-8 w-1/1" src="img/coursesCards/1.png" alt="image" />
                                <button className="absolute-button" data-el-toggle=".js-more-1-toggle">
                                  <span className="d-flex items-center justify-center size-35 bg-white shadow-1 rounded-8">
                                    <i className="icon-menu-vertical" />
                                  </span>
                                </button>
                                <div className="toggle-element -dshb-more js-more-1-toggle">
                                  <div className="px-25 py-25 bg-white -dark-bg-dark-2 shadow-1 border-light rounded-8">
                                    <a href="#" className="d-flex items-center">
                                      <div className="icon-share" />
                                      <div className="text-17 lh-1 fw-500 ml-12">Share</div>
                                    </a>
                                    <a href="#" className="d-flex items-center mt-20">
                                      <div className="icon-bookmark" />
                                      <div className="text-17 lh-1 fw-500 ml-12">Favorite</div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="pt-15">
                                <div className="d-flex y-gap-10 justify-between items-center">
                                  <div className="text-14 lh-1">Ali Tufan</div>
                                  <div className="d-flex items-center">
                                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                                    <div className="d-flex x-gap-5 items-center">
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                    </div>
                                  </div>
                                </div>
                                <h3 className="text-16 fw-500 lh-15 mt-10">Learn Figma - UI/UX Design Essential Training</h3>
                                <div className="progress-bar mt-10">
                                  <div className="progress-bar__bg bg-light-3" />
                                  <div className="progress-bar__bar bg-purple-1 w-1/5" />
                                </div>
                                <div className="d-flex y-gap-10 justify-between items-center mt-10">
                                  <div className="text-dark-1">% 20 Completed</div>
                                  <div>25%</div>
                                </div>
                              </div>
                            </div>
                            <div className="w-1/5 xl:w-1/3 lg:w-1/2 sm:w-1/1">
                              <div className="relative">
                                <img className="rounded-8 w-1/1" src="img/coursesCards/2.png" alt="image" />
                                <button className="absolute-button" data-el-toggle=".js-more-2-toggle">
                                  <span className="d-flex items-center justify-center size-35 bg-white shadow-1 rounded-8">
                                    <i className="icon-menu-vertical" />
                                  </span>
                                </button>
                                <div className="toggle-element -dshb-more js-more-2-toggle">
                                  <div className="px-25 py-25 bg-white -dark-bg-dark-2 shadow-1 border-light rounded-8">
                                    <a href="#" className="d-flex items-center">
                                      <div className="icon-share" />
                                      <div className="text-17 lh-1 fw-500 ml-12">Share</div>
                                    </a>
                                    <a href="#" className="d-flex items-center mt-20">
                                      <div className="icon-bookmark" />
                                      <div className="text-17 lh-1 fw-500 ml-12">Favorite</div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="pt-15">
                                <div className="d-flex y-gap-10 justify-between items-center">
                                  <div className="text-14 lh-1">Ali Tufan</div>
                                  <div className="d-flex items-center">
                                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                                    <div className="d-flex x-gap-5 items-center">
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                    </div>
                                  </div>
                                </div>
                                <h3 className="text-16 fw-500 lh-15 mt-10">Learn Figma - UI/UX Design Essential Training</h3>
                                <div className="progress-bar mt-10">
                                  <div className="progress-bar__bg bg-light-3" />
                                  <div className="progress-bar__bar bg-purple-1 w-1/5" />
                                </div>
                                <div className="d-flex y-gap-10 justify-between items-center mt-10">
                                  <div className="text-dark-1">% 20 Completed</div>
                                  <div>25%</div>
                                </div>
                              </div>
                            </div>
                            <div className="w-1/5 xl:w-1/3 lg:w-1/2 sm:w-1/1">
                              <div className="relative">
                                <img className="rounded-8 w-1/1" src="img/coursesCards/3.png" alt="image" />
                                <button className="absolute-button" data-el-toggle=".js-more-3-toggle">
                                  <span className="d-flex items-center justify-center size-35 bg-white shadow-1 rounded-8">
                                    <i className="icon-menu-vertical" />
                                  </span>
                                </button>
                                <div className="toggle-element -dshb-more js-more-3-toggle">
                                  <div className="px-25 py-25 bg-white -dark-bg-dark-2 shadow-1 border-light rounded-8">
                                    <a href="#" className="d-flex items-center">
                                      <div className="icon-share" />
                                      <div className="text-17 lh-1 fw-500 ml-12">Share</div>
                                    </a>
                                    <a href="#" className="d-flex items-center mt-20">
                                      <div className="icon-bookmark" />
                                      <div className="text-17 lh-1 fw-500 ml-12">Favorite</div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="pt-15">
                                <div className="d-flex y-gap-10 justify-between items-center">
                                  <div className="text-14 lh-1">Ali Tufan</div>
                                  <div className="d-flex items-center">
                                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                                    <div className="d-flex x-gap-5 items-center">
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                    </div>
                                  </div>
                                </div>
                                <h3 className="text-16 fw-500 lh-15 mt-10">Learn Figma - UI/UX Design Essential Training</h3>
                                <div className="progress-bar mt-10">
                                  <div className="progress-bar__bg bg-light-3" />
                                  <div className="progress-bar__bar bg-purple-1 w-1/5" />
                                </div>
                                <div className="d-flex y-gap-10 justify-between items-center mt-10">
                                  <div className="text-dark-1">% 20 Completed</div>
                                  <div>25%</div>
                                </div>
                              </div>
                            </div>
                            <div className="w-1/5 xl:w-1/3 lg:w-1/2 sm:w-1/1">
                              <div className="relative">
                                <img className="rounded-8 w-1/1" src="img/coursesCards/4.png" alt="image" />
                                <button className="absolute-button" data-el-toggle=".js-more-4-toggle">
                                  <span className="d-flex items-center justify-center size-35 bg-white shadow-1 rounded-8">
                                    <i className="icon-menu-vertical" />
                                  </span>
                                </button>
                                <div className="toggle-element -dshb-more js-more-4-toggle">
                                  <div className="px-25 py-25 bg-white -dark-bg-dark-2 shadow-1 border-light rounded-8">
                                    <a href="#" className="d-flex items-center">
                                      <div className="icon-share" />
                                      <div className="text-17 lh-1 fw-500 ml-12">Share</div>
                                    </a>
                                    <a href="#" className="d-flex items-center mt-20">
                                      <div className="icon-bookmark" />
                                      <div className="text-17 lh-1 fw-500 ml-12">Favorite</div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="pt-15">
                                <div className="d-flex y-gap-10 justify-between items-center">
                                  <div className="text-14 lh-1">Ali Tufan</div>
                                  <div className="d-flex items-center">
                                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                                    <div className="d-flex x-gap-5 items-center">
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                    </div>
                                  </div>
                                </div>
                                <h3 className="text-16 fw-500 lh-15 mt-10">Learn Figma - UI/UX Design Essential Training</h3>
                                <div className="progress-bar mt-10">
                                  <div className="progress-bar__bg bg-light-3" />
                                  <div className="progress-bar__bar bg-purple-1 w-1/5" />
                                </div>
                                <div className="d-flex y-gap-10 justify-between items-center mt-10">
                                  <div className="text-dark-1">% 20 Completed</div>
                                  <div>25%</div>
                                </div>
                              </div>
                            </div>
                            <div className="w-1/5 xl:w-1/3 lg:w-1/2 sm:w-1/1">
                              <div className="relative">
                                <img className="rounded-8 w-1/1" src="img/coursesCards/5.png" alt="image" />
                                <button className="absolute-button" data-el-toggle=".js-more-5-toggle">
                                  <span className="d-flex items-center justify-center size-35 bg-white shadow-1 rounded-8">
                                    <i className="icon-menu-vertical" />
                                  </span>
                                </button>
                                <div className="toggle-element -dshb-more js-more-5-toggle">
                                  <div className="px-25 py-25 bg-white -dark-bg-dark-2 shadow-1 border-light rounded-8">
                                    <a href="#" className="d-flex items-center">
                                      <div className="icon-share" />
                                      <div className="text-17 lh-1 fw-500 ml-12">Share</div>
                                    </a>
                                    <a href="#" className="d-flex items-center mt-20">
                                      <div className="icon-bookmark" />
                                      <div className="text-17 lh-1 fw-500 ml-12">Favorite</div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="pt-15">
                                <div className="d-flex y-gap-10 justify-between items-center">
                                  <div className="text-14 lh-1">Ali Tufan</div>
                                  <div className="d-flex items-center">
                                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                                    <div className="d-flex x-gap-5 items-center">
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                    </div>
                                  </div>
                                </div>
                                <h3 className="text-16 fw-500 lh-15 mt-10">Learn Figma - UI/UX Design Essential Training</h3>
                                <div className="progress-bar mt-10">
                                  <div className="progress-bar__bg bg-light-3" />
                                  <div className="progress-bar__bar bg-purple-1 w-1/5" />
                                </div>
                                <div className="d-flex y-gap-10 justify-between items-center mt-10">
                                  <div className="text-dark-1">% 20 Completed</div>
                                  <div>25%</div>
                                </div>
                              </div>
                            </div>
                            <div className="w-1/5 xl:w-1/3 lg:w-1/2 sm:w-1/1">
                              <div className="relative">
                                <img className="rounded-8 w-1/1" src="img/coursesCards/6.png" alt="image" />
                                <button className="absolute-button" data-el-toggle=".js-more-6-toggle">
                                  <span className="d-flex items-center justify-center size-35 bg-white shadow-1 rounded-8">
                                    <i className="icon-menu-vertical" />
                                  </span>
                                </button>
                                <div className="toggle-element -dshb-more js-more-6-toggle">
                                  <div className="px-25 py-25 bg-white -dark-bg-dark-2 shadow-1 border-light rounded-8">
                                    <a href="#" className="d-flex items-center">
                                      <div className="icon-share" />
                                      <div className="text-17 lh-1 fw-500 ml-12">Share</div>
                                    </a>
                                    <a href="#" className="d-flex items-center mt-20">
                                      <div className="icon-bookmark" />
                                      <div className="text-17 lh-1 fw-500 ml-12">Favorite</div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="pt-15">
                                <div className="d-flex y-gap-10 justify-between items-center">
                                  <div className="text-14 lh-1">Ali Tufan</div>
                                  <div className="d-flex items-center">
                                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                                    <div className="d-flex x-gap-5 items-center">
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                    </div>
                                  </div>
                                </div>
                                <h3 className="text-16 fw-500 lh-15 mt-10">Learn Figma - UI/UX Design Essential Training</h3>
                                <div className="progress-bar mt-10">
                                  <div className="progress-bar__bg bg-light-3" />
                                  <div className="progress-bar__bar bg-purple-1 w-1/5" />
                                </div>
                                <div className="d-flex y-gap-10 justify-between items-center mt-10">
                                  <div className="text-dark-1">% 20 Completed</div>
                                  <div>25%</div>
                                </div>
                              </div>
                            </div>
                            <div className="w-1/5 xl:w-1/3 lg:w-1/2 sm:w-1/1">
                              <div className="relative">
                                <img className="rounded-8 w-1/1" src="img/coursesCards/7.png" alt="image" />
                                <button className="absolute-button" data-el-toggle=".js-more-7-toggle">
                                  <span className="d-flex items-center justify-center size-35 bg-white shadow-1 rounded-8">
                                    <i className="icon-menu-vertical" />
                                  </span>
                                </button>
                                <div className="toggle-element -dshb-more js-more-7-toggle">
                                  <div className="px-25 py-25 bg-white -dark-bg-dark-2 shadow-1 border-light rounded-8">
                                    <a href="#" className="d-flex items-center">
                                      <div className="icon-share" />
                                      <div className="text-17 lh-1 fw-500 ml-12">Share</div>
                                    </a>
                                    <a href="#" className="d-flex items-center mt-20">
                                      <div className="icon-bookmark" />
                                      <div className="text-17 lh-1 fw-500 ml-12">Favorite</div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="pt-15">
                                <div className="d-flex y-gap-10 justify-between items-center">
                                  <div className="text-14 lh-1">Ali Tufan</div>
                                  <div className="d-flex items-center">
                                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                                    <div className="d-flex x-gap-5 items-center">
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                    </div>
                                  </div>
                                </div>
                                <h3 className="text-16 fw-500 lh-15 mt-10">Learn Figma - UI/UX Design Essential Training</h3>
                                <div className="progress-bar mt-10">
                                  <div className="progress-bar__bg bg-light-3" />
                                  <div className="progress-bar__bar bg-purple-1 w-1/5" />
                                </div>
                                <div className="d-flex y-gap-10 justify-between items-center mt-10">
                                  <div className="text-dark-1">% 20 Completed</div>
                                  <div>25%</div>
                                </div>
                              </div>
                            </div>
                            <div className="w-1/5 xl:w-1/3 lg:w-1/2 sm:w-1/1">
                              <div className="relative">
                                <img className="rounded-8 w-1/1" src="img/coursesCards/8.png" alt="image" />
                                <button className="absolute-button" data-el-toggle=".js-more-8-toggle">
                                  <span className="d-flex items-center justify-center size-35 bg-white shadow-1 rounded-8">
                                    <i className="icon-menu-vertical" />
                                  </span>
                                </button>
                                <div className="toggle-element -dshb-more js-more-8-toggle">
                                  <div className="px-25 py-25 bg-white -dark-bg-dark-2 shadow-1 border-light rounded-8">
                                    <a href="#" className="d-flex items-center">
                                      <div className="icon-share" />
                                      <div className="text-17 lh-1 fw-500 ml-12">Share</div>
                                    </a>
                                    <a href="#" className="d-flex items-center mt-20">
                                      <div className="icon-bookmark" />
                                      <div className="text-17 lh-1 fw-500 ml-12">Favorite</div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="pt-15">
                                <div className="d-flex y-gap-10 justify-between items-center">
                                  <div className="text-14 lh-1">Ali Tufan</div>
                                  <div className="d-flex items-center">
                                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                                    <div className="d-flex x-gap-5 items-center">
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                      <i className="icon-star text-9 text-yellow-1" />
                                    </div>
                                  </div>
                                </div>
                                <h3 className="text-16 fw-500 lh-15 mt-10">Learn Figma - UI/UX Design Essential Training</h3>
                                <div className="progress-bar mt-10">
                                  <div className="progress-bar__bg bg-light-3" />
                                  <div className="progress-bar__bar bg-purple-1 w-1/5" />
                                </div>
                                <div className="d-flex y-gap-10 justify-between items-center mt-10">
                                  <div className="text-dark-1">% 20 Completed</div>
                                  <div>25%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row justify-center pt-30">
                            <div className="col-auto">
                              <div className="pagination -buttons">
                                <button className="pagination__button -prev">
                                  <i className="icon icon-chevron-left" />
                                </button>
                                <div className="pagination__count">
                                  <a href="#">1</a>
                                  <a className="-count-is-active" href="#">2</a>
                                  <a href="#">3</a>
                                  <span>...</span>
                                  <a href="#">67</a>
                                </div>
                                <button className="pagination__button -next">
                                  <i className="icon icon-chevron-right" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tabs__pane -tab-item-2" />
                        <div className="tabs__pane -tab-item-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        
          </div>
        )
    }
}