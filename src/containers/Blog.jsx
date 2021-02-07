import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Moment from 'moment'
import groupBy from 'lodash/groupBy'
import map from 'lodash/map'
import flow from 'lodash/flow'
import partialRight from 'lodash/partialRight'
import orderBy from 'lodash/orderBy'

import Footer from 'components/Footer'
import BlogPostsGroup from 'components/BlogPostsGroup'
import { blogPosts } from 'content/BlogContent.js'
import 'App.scss'

const getDate = (date, dateFn = (date) => date) => {
  return dateFn(Moment.unix(date))
}

const formatPostsByDate = (blogPosts, dateFn, sortOrder) =>
  flow([
    partialRight(groupBy, (post) => getDate(post.date, dateFn)),
    partialRight(map, (posts, key) => [key, posts]),
    partialRight(orderBy, 0, sortOrder),
  ])(blogPosts)

class Blog extends Component {
  renderBlogPosts(yearlyPosts) {
    const monthlyPosts = formatPostsByDate(
      yearlyPosts,
      // 1. The Moment library has the audacity to return months (& dates) zero-indexed (0=Jan, 11=Dec)
      // we don't need to worry about dates because we just sort with them (and never display them).
      (date) => date.month() + 1,
      'desc',
    )
    return map(monthlyPosts, ([month, posts], index) => {
      const orderedPosts = orderBy(posts, 'date', 'desc')
      return (
        <BlogPostsGroup
          // 2. But when actually processing the month, treats it 1-indexed (1=Jan, 12=Dec)
          month={Moment(month).format('MMMM')}
          color={index % 2 === 0 ? 'var(--color-eng)' : 'var(--color-math)'}
          blogPosts={orderedPosts}
        />
      )
    })
  }

  renderMonthlyPosts() {
    const yearlyPosts = formatPostsByDate(
      blogPosts,
      (date) => date.year(),
      'desc',
    )
    return map(yearlyPosts, ([year, posts]) => (
      <div className="">
        <h3 className="text-center my-4 my-md-5">{year}</h3>
        {this.renderBlogPosts(posts)}
      </div>
    ))
  }

  render() {
    return (
      <div className="footer-to-bottom">
        <body>
          <Container className="mt-5 mb-5">
            <h1 className="m-0">Blog</h1>
            {this.renderMonthlyPosts()}
          </Container>
        </body>
        <Footer color={'purple'} />
      </div>
    )
  }
}

export default Blog
