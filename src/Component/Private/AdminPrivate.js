import { Divider } from 'rc-menu'
import React from 'react'
import { Navigate } from 'react-router-dom'
const AdminPrivate=({ user, children })=> { 
    if(!user?.email){
        return <Navigate to="/login" replace/>
    }
  else if (user?.role!=="admin") {
    return <div className='mt-[80px]'>
        <h1>You Cannot access Here!</h1>
        <h2>Please Login as a Admin!!</h2>
    </div>
  }
  else{

      return children
  }
}
export default AdminPrivate