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

const podcastRSSLink = {
  type: "rss",
  link: "https://anchor.fm/s/1ca1c6a8/podcast/rss",
};

const testposts = [
  {
    type: BLOG_TYPES.PODCAST,
    title: "SXSE S01E01 - Running a Startup as an SE Student",
    date: "1586908800",
    links: [
      {
        type: "spotify",
        link:
          "https://open.spotify.com/episode/2AW4wE0Oygu4kWUYHIw0jO?si=KGnGYGoYS6CYXXYAMUJrfA",
      },
      {
        type: "anchor",
        link:
          "https://anchor.fm/sesoc/episodes/Running-a-Startup-as-an-SE-Student-ecr190/a-a1uoim4",
      },
      {
        type: "apple",
        link:
          "https://podcasts.apple.com/us/podcast/running-a-startup-as-an-se-student/id1508757308?i=1000471887899",
      },
      podcastRSSLink,
    ],
  },
  {
    type: BLOG_TYPES.PODCAST,
    title: "SXSE S01E02 - SE FYDP: Team Mask",
    date: "1587945600",
    links: [
      {
        type: "spotify",
        link:
          "https://open.spotify.com/episode/24aGh1lNgFf8UPzdGGse5h?si=xi9XMkbPSmOt9rIUi-J5Ng",
      },
      {
        type: "anchor",
        link:
          "https://anchor.fm/sesoc/episodes/SE-FYDP-Team-Mask-edaguu/a-a21rlp2",
      },
      {
        type: "apple",
        link:
          "https://podcasts.apple.com/us/podcast/se-fydp-team-mask/id1508757308?i=1000472800670",
      },
      podcastRSSLink,
    ],
  },
  {
    type: BLOG_TYPES.PODCAST,
    title: "SXSE S01E02 - SE FYDP: Team Mask",
    date: "1593561600",
    links: [
      {
        type: "spotify",
        link:
          "https://open.spotify.com/episode/6dSt5jaAgEtxvUew7YXz48?si=uArETrrJSlW1J5YjynUu7Q",
      },
      {
        type: "anchor",
        link:
          "https://anchor.fm/sesoc/episodes/How-to-Make-the-Most-out-of-Your-First-Co-op-eg5hd4/a-a2jl1iq",
      },
      {
        type: "apple",
        link:
          "https://podcasts.apple.com/us/podcast/how-to-make-the-most-out-of-your-first-co-op/id1508757308?i=1000480893251",
      },
      podcastRSSLink,
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
