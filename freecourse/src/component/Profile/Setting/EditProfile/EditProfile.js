import React,{ Component} from 'react';
export default class EditProfile extends Component {
    render(){ return(
        
        <div className="dashboard__main">
        <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Settings</h1>
            <div className="mt-10">Lorem ipsum dolor sit amet, consectetur.</div>
          </div>
        </div>
        <div className="row y-gap-30">
          <div className="col-12">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="tabs -active-purple-2 js-tabs pt-0">
                <div className="tabs__content py-30 px-30 js-tabs-content">
                {/* <EditProfile></EditProfile>
                <ForgetPassword></ForgetPassword> */}

                  <div className="tabs__pane -tab-item-3">
                    <form action="#" className="contact-form row y-gap-30">
                      <div className="col-md-6">
                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Twitter</label>
                        <input type="text" placeholder="Twitter Profile" />
                      </div>
                      <div className="col-md-6">
                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Facebook</label>
                        <input type="text" placeholder="Facebook Profile" />
                      </div>
                      <div className="col-md-6">
                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Instagram</label>
                        <input type="text" placeholder="Instagram Profile" />
                      </div>
                      <div className="col-md-6">
                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">LinkedIn Profile URL</label>
                        <input type="text" placeholder="LinkedIn Profile" />
                      </div>
                      <div className="col-12">
                        <button className="button -md -purple-1 text-white">Save Social Profile</button>
                      </div>
                    </form>
                  </div>
                  <div className="tabs__pane -tab-item-4">
                    <form action="#" className="contact-form">
                      <div className="row">
                        <div className="col-12">
                          <div className="text-16 fw-500 text-dark-1">Notifications - Choose when and how to be notified</div>
                          <p className="text-14 lh-13 mt-5">Select push and email notifications you'd like to receive</p>
                        </div>
                      </div>
                      <div className="pt-60">
                        <div className="row y-gap-20 justify-between">
                          <div className="col-auto">
                            <div className="text-16 fw-500 text-dark-1">Choose when and how to be notified</div>
                          </div>
                        </div>
                        <div className="pt-30">
                          <div className="row y-gap-20 justify-between">
                            <div className="col-auto">
                              <div className="text-16 fw-500 text-dark-1">Subscriptions</div>
                              <p className="text-14 lh-13 mt-5">Notify me about activity from the profiles I'm subscribed to</p>
                            </div>
                            <div className="col-auto">
                              <div className="form-switch">
                                <div className="switch" data-switch=".js-switch-content">
                                  <input type="checkbox" />
                                  <span className="switch__slider" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-top-light pt-20 mt-20">
                          <div className="row y-gap-20 justify-between">
                            <div className="col-auto">
                              <div className="text-16 fw-500 text-dark-1">Recommended Courses</div>
                              <p className="text-14 lh-13 mt-5">Notify me about activity from the profiles I'm subscribed to</p>
                            </div>
                            <div className="col-auto">
                              <div className="form-switch">
                                <div className="switch" data-switch=".js-switch-content">
                                  <input type="checkbox" />
                                  <span className="switch__slider" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-top-light pt-20 mt-20">
                          <div className="row y-gap-20 justify-between">
                            <div className="col-auto">
                              <div className="text-16 fw-500 text-dark-1">Replies to my comments</div>
                              <p className="text-14 lh-13 mt-5">Notify me about activity from the profiles I'm subscribed to</p>
                            </div>
                            <div className="col-auto">
                              <div className="form-switch">
                                <div className="switch" data-switch=".js-switch-content">
                                  <input type="checkbox" />
                                  <span className="switch__slider" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-top-light pt-20 mt-20">
                          <div className="row y-gap-20 justify-between">
                            <div className="col-auto">
                              <div className="text-16 fw-500 text-dark-1">Activity on my comments</div>
                              <p className="text-14 lh-13 mt-5">Notify me about activity from the profiles I'm subscribed to</p>
                            </div>
                            <div className="col-auto">
                              <div className="form-switch">
                                <div className="switch" data-switch=".js-switch-content">
                                  <input type="checkbox" />
                                  <span className="switch__slider" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-60">
                        <div className="row y-gap-20 justify-between">
                          <div className="col-auto">
                            <div className="text-16 fw-500 text-dark-1">Email notifications</div>
                          </div>
                        </div>
                        <div className="pt-30">
                          <div className="row y-gap-20 justify-between">
                            <div className="col-auto">
                              <div className="text-16 fw-500 text-dark-1">Send me emails about my Cursus activity and updates I requested</div>
                              <p className="text-14 lh-13 mt-5">Notify me about activity from the profiles I'm subscribed to</p>
                            </div>
                            <div className="col-auto">
                              <div className="form-switch">
                                <div className="switch" data-switch=".js-switch-content">
                                  <input type="checkbox" />
                                  <span className="switch__slider" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-top-light pt-20 mt-20">
                          <div className="row y-gap-20 justify-between">
                            <div className="col-auto">
                              <div className="text-16 fw-500 text-dark-1">Promotions, course recommendations, and helpful resources from Cursus.</div>
                              <p className="text-14 lh-13 mt-5">Notify me about activity from the profiles I'm subscribed to</p>
                            </div>
                            <div className="col-auto">
                              <div className="form-switch">
                                <div className="switch" data-switch=".js-switch-content">
                                  <input type="checkbox" />
                                  <span className="switch__slider" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-top-light pt-20 mt-20">
                          <div className="row y-gap-20 justify-between">
                            <div className="col-auto">
                              <div className="text-16 fw-500 text-dark-1">Announcements from instructors whose course(s) I’m enrolled in.</div>
                              <p className="text-14 lh-13 mt-5">Notify me about activity from the profiles I'm subscribed to</p>
                            </div>
                            <div className="col-auto">
                              <div className="form-switch">
                                <div className="switch" data-switch=".js-switch-content">
                                  <input type="checkbox" />
                                  <span className="switch__slider" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row pt-30">
                        <div className="col-12">
                          <button className="button -md -purple-1 text-white">Save Changes</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="tabs__pane -tab-item-5">
                    <form action="#" className="contact-form row y-gap-30">
                      <div className="col-12">
                        <div className="text-16 fw-500 text-dark-1">Close account</div>
                        <p className="mt-10">Warning: If you close your account, you will be unsubscribed from all your 5 courses, and will lose access forever.</p>
                      </div>
                      <div className="col-md-7">
                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Enter Password</label>
                        <input type="text" placeholder="Enter Password" />
                      </div>
                      <div className="col-12">
                        <button className="button -md -purple-1 text-white">Close Account</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    

        <div className="tabs__content py-30 px-30 js-tabs-content">
        <div className="tabs__pane -tab-item-1 is-active">
        <div className="row y-gap-20 x-gap-20 items-center">
          <div className="col-auto">
            <img className="size-100" src="img/dashboard/edit/1.png" alt="image" />
          </div>
          <div className="col-auto">
            <div className="text-16 fw-500 text-dark-1">Your avatar</div>
            <div className="text-14 lh-1 mt-10">PNG or JPG no bigger than 800px wide and tall.</div>
            <div className="d-flex x-gap-10 y-gap-10 flex-wrap pt-15">
              <div>
                <div className="d-flex justify-center items-center size-40 rounded-8 bg-light-3">
                  <div className="icon-cloud text-16" />
                </div>
              </div>
              <div>
                <div className="d-flex justify-center items-center size-40 rounded-8 bg-light-3">
                  <div className="icon-bin text-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-top-light pt-30 mt-30">
          <form action="#" className="contact-form row y-gap-30">
            <div className="col-md-6">
              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">First Name</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div className="col-md-6">
              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="col-md-6">
              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Phone</label>
              <input type="text" placeholder="Phone" />
            </div>
            <div className="col-md-6">
              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Birthday</label>
              <input type="text" placeholder="Birthday" />
            </div>
            <div className="col-md-6">
              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Address Line 1</label>
              <input type="text" placeholder="Address Line 1" />
            </div>
            <div className="col-md-6">
              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Address Line 2</label>
              <input type="text" placeholder="Address Line 2" />
            </div>
            <div className="col-md-6">
              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">State</label>
              <input type="text" placeholder="State" />
            </div>
            <div className="col-md-6">
              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Country</label>
              <input type="text" placeholder="Country" />
            </div>
            <div className="col-12">
              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Personal info</label>
              <textarea placeholder="Text..." rows={7} defaultValue={""} />
            </div>
            <div className="col-12">
              <button className="button -md -purple-1 text-white">Update Profile</button>
            </div>
          </form>
        </div>
      </div>
      </div>
      </div>
    )}
}