import React from 'react'
import BlogList from '@/components/Blog/BlogList'
import HeroSub from '@/components/SharedComponent/HeroSub'

const BlogPage = () => {
  const breadcrumbLinks = [
    { href: '/', text: 'Home' },
    { href: '/blog', text: 'Blog' },
  ]
  return (
    <>
      <HeroSub
        title='Blog'
        description='Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends.'
        breadcrumbLinks={breadcrumbLinks}
      />
      <BlogList />
    </>
  )
}

export default BlogPage
