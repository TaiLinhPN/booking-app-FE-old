


import React from 'react';
import Home from './component/Content/Home';
import Login from './component/Login/Login';
import SignUp from './component/Signup/Signup';
import ContactUs from './component/ContactUs';
import Course from './component/Profile/Course/Course';
import Profile from './component/Profile/Profile';
import Review from './component/Profile/Review/Review';
import Setting from './component/Profile/Setting/Setting';
import EditProfile from './component/Profile/Setting/EditProfile/EditProfile';
import ForgetPassword from './component/Profile/Setting/ForgetPassword/ForgetPassword';


const routes = [{
    path : '/',
	exact : true,
	main : ()=> <Home />
},
{
    path : '/Login',
	exact : true,
	main : ({history})=> <Login history={history} />
},
{
    path : '/SignUp',
	exact : true,
	main : ({history})=> <SignUp history={history} />
},
{
    path : '/ContactUs',
	exact : true,
	main : ({history})=> <ContactUs history={history} />
},
{
    path : '/Course',
	exact : true,
	main : ({history})=> <Course history={history} />
},
{
	path: '/Profile',
	exact : true,
	main : ({history})=> <Profile history={history} />
}
,
{
    path : '/Review',
	exact : true,
	main : ({history})=> <Review history={history} />
}
,
{
    path : '/Setting',
	exact : true,
	main : ({history})=> <Setting history={history} />
}
,
{
    path : '/EditProfile',
	exact : true,
	main : ({history})=> <EditProfile history={history} />
}
,
{
    path : '/ForgetPassword',
	exact : true,
	main : ({history})=> <ForgetPassword history={history} />
}




];
export default routes;