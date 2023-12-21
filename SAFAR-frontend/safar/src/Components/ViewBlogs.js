import React from 'react'
import '../Styles/ViewBlog.css'
import Sidebar from './Sidebar'
import AddATale from './AddATale'

const ViewBlogs = () => {
  return (
    <>
      <div className='d-flex'>

        <aside className='sidebar'>
          <Sidebar/>
        </aside>

        <main className='container mt-4 bg-warning'>
          <AddATale/>
        </main>
      </div>
    </>
  )
}

export default ViewBlogs