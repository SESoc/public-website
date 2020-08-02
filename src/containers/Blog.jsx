import React, {Component} from "react";
import {Container} from "react-bootstrap";
import Moment from "moment";
import groupBy from "lodash/groupBy";
import map from "lodash/map";
import flow from "lodash/flow";
import partialRight from "lodash/partialRight";
import orderBy from "lodash/orderBy";

import Footer from "../components/Footer.jsx";
import BlogPostsGroup, {BLOG_TYPES} from "../components/BlogPostsGroup.jsx";
import "./../App.scss";

const testposts = [
  {
    type: BLOG_TYPES.PODCAST,
    title: "SXSE S01E01 - Running a Startup as an SE Student",
    date: "1587772800",
    links: [
      {
        type: "spotify",
        link: "spotify link",
      },
      {
        type: "anchor",
        link: "anchor link",
      },
      {
        type: "apple",
        link: "apple link",
      },
      {
        type: "rss",
        link: "rss link",
      },
    ],
  },
  {
    type: BLOG_TYPES.PODCAST,
    title: "SXSE S01E02 - SE FYDP: Team Mask",
    date: "1587945600",
    links: [
      {
        type: "spotify",
        link: "spotify link",
      },
      {
        type: "anchor",
        link: "anchor link",
      },
      {
        type: "apple",
        link: "apple link",
      },
      {
        type: "rss",
        link: "rss link",
      },
    ],
  },
  {
    type: BLOG_TYPES.PODCAST,
    title: "SXSE S01E02 - SE FYDP: Team Mask",
    date: "1587965600",
    links: [
      {
        type: "spotify",
        link: "spotify link",
      },
      {
        type: "anchor",
        link: "anchor link",
      },
      {
        type: "apple",
        link: "apple link",
      },
      {
        type: "rss",
        link: "rss link",
      },
    ],
  },
  {
    type: BLOG_TYPES.BLOG,
    title: "Blog Post Title",
    date: "1593561600",
    links: [
      {
        type: "default",
        link: "link",
      },
    ],
  },
];

const getDate = (date, dateFn = date => date) => dateFn(Moment.unix(date));

const formatPostsByDate = (blogPosts, dateFn, sortOrder) =>
  flow([
    partialRight(groupBy, post => getDate(post.date, dateFn)),
    partialRight(map, (posts, key) => [key, posts]),
    partialRight(orderBy, 0, sortOrder),
  ])(blogPosts);

class Blog extends Component {
  renderBlogPosts(yearlyPosts) {
    const monthlyPosts = formatPostsByDate(
      yearlyPosts,
      date => date.month(),
      "asc",
    );
    return map(monthlyPosts, ([month, posts], index) => {
      const orderedPosts = orderBy(posts, "date", "asc");
      return (
        <BlogPostsGroup
          month={Moment(month).format("MMMM")}
          color={index % 2 === 0 ? "var(--color-eng)" : "var(--color-math)"}
          blogPosts={orderedPosts}
        />
      );
    });
  }

  renderMonthlyPosts() {
    const yearlyPosts = formatPostsByDate(
      testposts,
      date => date.year(),
      "desc",
    );
    return map(yearlyPosts, ([year, posts]) => (
      <div className="">
        <h3 className="text-center my-4 my-md-5">{year}</h3>
        {this.renderBlogPosts(posts)}
      </div>
    ));
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
        <Footer color={"purple"} />
      </div>
    );
  }
}

export default Blog;
