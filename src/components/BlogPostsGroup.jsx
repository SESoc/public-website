import React, {Component} from "react";
import url from "url";
import PropTypes from "prop-types";
import {Card, Col, Row} from "react-bootstrap";
import BlogSocialLinks from "./BlogSocialLinks";
import "./styles/BlogPostsGroup.scss";

export const BLOG_TYPES = {
  PODCAST: "Podcast",
  BLOG: "Blog",
  NEWS: "News",
};

const getDefaultImage = type =>
  url.resolve(
    process.env.PUBLIC_URL,
    `/blog/${type === BLOG_TYPES.PODCAST ? "podcast" : "default"}.png`,
  );

const BlogTile = ({color, type, title, image, links}) => {
  const imgSrc = image || getDefaultImage(type);
  const defaultLink = links.find(link => link.type === "default" || link.type === "spotify");

  return (
    <Card className="card">
      <a href={defaultLink.link} target="_blank" rel="noopener noreferrer">
        <div className="card-img-container">
          <Card.Img className="card-img" variant="top" src={imgSrc} />
          <div className="card-img-hover">
            <BlogSocialLinks type={type} links={links} color={color} />
          </div>
        </div>
        <Card.Body className="card-body" style={{backgroundColor: color}}>
          {title}
        </Card.Body>
      </a>
    </Card>
  );
};

BlogTile.propTypes = {
  color: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(BLOG_TYPES)),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    link: PropTypes.oneOf("default") || PropTypes.string,
  })).isRequired,
};

BlogTile.defaultProps = {
  image: null,
};

const BlogTileRow = ({blogPosts, color}) => {
  if (!blogPosts) return null;
  return (
    <Row className="blog-row">
      {blogPosts.map(blog => (
        <BlogTile {...blog} color={color} />
      ))}
    </Row>
  );
};

BlogTileRow.propTypes = {
  blogPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
  color: PropTypes.string.isRequired,
};

class BlogPostsGroup extends Component {
  render() {
    const {blogPosts, month, color} = this.props;

    return (
      <Row className="justify-content-center align-content-center">
        <Col sm={12} md={3}>
          <h2 className="blog-month">{month}</h2>
        </Col>
        <Col sm={12} md={9}>
          <BlogTileRow blogPosts={blogPosts} color={color} />
        </Col>
      </Row>
    );
  }
}

BlogPostsGroup.propTypes = {
  blogPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
  month: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default BlogPostsGroup;
