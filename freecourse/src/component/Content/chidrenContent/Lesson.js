import React from 'react';

const Lesson = () => {
    return (
        <>

            <section className="section-bg layout-pt-lg layout-pb-md">
                <div className="section-bg__item -full -height-half bg-dark-5" />
                <div data-anim-wrap="" className="container animated">
                    <div className="row justify-center text-center">
                        <div className="col-auto">
                            <div className="sectionTitle ">
                                <h2 className="sectionTitle__title text-white">
                                    Start your Learning Journey Today!
                                </h2>
                                <p className="sectionTitle__text text-white">
                                    Lorem ipsum dolor sit amet, consectetur.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        data-anim-wrap=""
                        className="row y-gap-30 justify-between pt-60 lg:pt-50 animated"
                    >
                        <div
                            data-anim-child="slide-up delay-1"
                            className="col-lg-3 col-md-6 is-in-view"
                        >
                            <div className="coursesCard -type-2 text-center pt-50 pb-40 px-30 rounded-8 bg-white shadow-2">
                                <div className="coursesCard__image">
                                    <img src="img/home-5/learning/1.svg" alt="image" />
                                </div>
                                <div className="coursesCard__content mt-30">
                                    <h5 className="coursesCard__title text-18 lh-1 fw-500">
                                        Learn with Experts
                                    </h5>
                                    <p className="coursesCard__text text-14 mt-10">
                                        Grursus mal suada faci lisis that ipsum ameti consecte.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            data-anim-child="slide-up delay-2"
                            className="col-lg-3 col-md-6 is-in-view"
                        >
                            <div className="coursesCard -type-2 text-center pt-50 pb-40 px-30 rounded-8 bg-white shadow-2">
                                <div className="coursesCard__image">
                                    <img src="img/home-5/learning/2.svg" alt="image" />
                                </div>
                                <div className="coursesCard__content mt-30">
                                    <h5 className="coursesCard__title text-18 lh-1 fw-500">
                                        Learn Anything
                                    </h5>
                                    <p className="coursesCard__text text-14 mt-10">
                                        Grursus mal suada faci lisis that ipsum ameti consecte.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            data-anim-child="slide-up delay-3"
                            className="col-lg-3 col-md-6 is-in-view"
                        >
                            <div className="coursesCard -type-2 text-center pt-50 pb-40 px-30 rounded-8 bg-white shadow-2">
                                <div className="coursesCard__image">
                                    <img src="img/home-5/learning/3.svg" alt="image" />
                                </div>
                                <div className="coursesCard__content mt-30">
                                    <h5 className="coursesCard__title text-18 lh-1 fw-500">
                                        Flexible Learning
                                    </h5>
                                    <p className="coursesCard__text text-14 mt-10">
                                        Grursus mal suada faci lisis that ipsum ameti consecte.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            data-anim-child="slide-up delay-4"
                            className="col-lg-3 col-md-6 is-in-view"
                        >
                            <div className="coursesCard -type-2 text-center pt-50 pb-40 px-30 rounded-8 bg-white shadow-2">
                                <div className="coursesCard__image">
                                    <img src="img/home-5/learning/4.svg" alt="image" />
                                </div>
                                <div className="coursesCard__content mt-30">
                                    <h5 className="coursesCard__title text-18 lh-1 fw-500">
                                        Industrial Standart
                                    </h5>
                                    <p className="coursesCard__text text-14 mt-10">
                                        Grursus mal suada faci lisis that ipsum ameti consecte.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Lesson;