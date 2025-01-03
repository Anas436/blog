import React from 'react'
import NavBar from './components/NavBar'
import Jumbotron from './components/Jumbotron'
import BlogHeading from './components/BlogHeading'
import BlogContainer from './components/BlogContainer'
import Footer from './components/Footer'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AddBlogPage from './pages/AddBlogPage'
import PageNotFound from './pages/PageNotFound'
import DetailPage from './pages/DetailPage'
import EditBlogPage from './pages/EditBlogPage'

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} /> 
      <Route path="/add-blog" element={<AddBlogPage />} />
      <Route path="/blogs/slug" element={<DetailPage />} />
      <Route path="blogs/edit/slug" element={<EditBlogPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App