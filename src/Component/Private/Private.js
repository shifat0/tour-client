
import React from 'react'
import { Navigate } from 'react-router-dom'
const Private=({ user, children })=> {
    
  if (!user?.email) {
    return <Navigate to="/login" replace/>
  }
  else{

      return children
  }
}
export default Private