import React from 'react'
import notFound from "../../assets/not-found.jpg"

export const Error = () => {
  return (
    <div>
      <img className='mt-20 ml-auto mr-auto' src={notFound} alt="" />
      <h1 className='uppercase text-blue-900 lead fw-bolder display-6 text-center'>We could not find this page</h1>
    </div>
  )
}
