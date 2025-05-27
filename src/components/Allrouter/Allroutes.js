import React from 'react'
import { PublicRoute } from '../../routes/publicRoutes/PublicRoutes'
import { useRoutes } from 'react-router'
const Allroutes = () => {
    const elements = useRoutes(PublicRoute)
  return (
    <div>
      {elements}
    </div>
  )
}

export default Allroutes
