import React from 'react'
import {useDispatch} from 'react-redux'
import {logout} from '../../store/authSlice.js'
import authService from '../../appwrite/config.js'


function LogoutBtn() {

    const dispatch=useDispatch();
    const logoutHandler=()=>{authService.logout().then(()=>{
      dispatch(logout())
    })
  }
  return (
    <div onClick={logoutHandler} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
      LogoutBtn
    </div>
  )
}

export default LogoutBtn