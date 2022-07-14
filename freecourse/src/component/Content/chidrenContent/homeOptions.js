import React from 'react';

const HomeOption=()=>{
    return(
        <>
        <div className="container">
  <div className="row y-gap-30 justify-between items-center">
    <div className="col-lg-6">
      <div className="composition -type-4">
        <div className="-el-1">
          <img className="P-image" src="img/home-7/courses/1.png" alt="image" />
        </div>
        <div className="-el-2">
          <div className="px-40 py-40 sm:px-25 sm:py-25 bg-white shadow-4 rounded-8">
            <div className="d-inline-block">
              <div className="px-15 py-8 rounded-200 bg-orange-1 text-11 lh-1 text-white">
                FEATURED TEACHER
              </div>
            </div>
            <div className="text-18 lh-18 text-dark-1 fw-500 mt-30">
              “Teaching on Education platform has been an amazing experience”
            </div>
            <div className="mt-30">
              <div className="text-15 lh-12 text-dark-1 fw-500">Ali Tufan</div>
              <div className="text-14 lh-12 mt-5">Designer, Apple Inc</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-5 col-lg-6 col-md-9">
      <h3 className="text-45 md:text-30 lh-11">
        <span className="text-purple-1">Courses</span> taught by industry
        leaders around the world
      </h3>
      <p className="mt-25">
        Use the list below to bring attention to your product’s key
        <br className="lg:d-none" /> differentiator.
      </p>
      <div className="d-flex x-gap-15 y-gap-15 flex-wrap pt-30">
        <div>
          <a href="#" className="button -md -dark-1 text-white">
            Browse Teacher
          </a>
        </div>
        <div>
          <a href="#" className="button -md -outline-dark-1 text-dark-1">
            Become a Teacher
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

        
        </>
    )
}
export default HomeOption;