import React,{ Component} from 'react';
import Menu from '../Menu/Menu';
import MenuSetting from '../Setting/MenuSetting/MenuSetting';
import EditProfile from '../Setting/EditProfile/EditProfile';
import ForgetPassword from '../Setting/ForgetPassword/ForgetPassword';
export default class Setting extends Component {
    render(){ return(
        <div>
            <Menu></Menu>
            <MenuSetting></MenuSetting>
      </div>

    )}
}