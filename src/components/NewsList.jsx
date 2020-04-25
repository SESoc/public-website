import React from "react";
import PropTypes from "prop-types";
import "./styles/NewsList.css";

const NewsContent = (props) => {
  const numEntries = props.numEntries
    ? props.numEntries
    : props.articles.length;

  return props.articles.slice(0, numEntries).map((article) => (
    <tr>
      <th>
        <a href={article.link}>
          <p className="mb-0"> {article.title} </p>
          <p className='accent'>
            {article.description}
          </p>
        </a>
      </th>
    </tr>
  ));
};

const NewsList = (props) => (
  <div className = "news-list">
    <h1>news</h1>
    <NewsContent {...props} />
  </div>
);

NewsList.propTypes = {
  articles: PropTypes.arrayOf({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  numEntries: PropTypes.number,
};

export default NewsList;
