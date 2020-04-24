import React from "react";
import PropTypes from "prop-types";

const NewsContent = (props) => {
  const numEntries = props.numEntries
    ? props.numEntries
    : props.articles.length;
  const colorStyle = (index) => ({
    color: index % 2 == 0 ? "var(--color-accent-eng)" : "var(--color-accent-math)",
  });

  return props.articles.splice(0, numEntries).map((article, i) => (
    <tr>
      <th>
        <a href={article.link}>
          <p className="mb-0"> {article.title} </p>
          <p style={colorStyle(i)}>
            {article.description}
          </p>
        </a>
      </th>
    </tr>
  ));
};

const NewsList = (props) => (
  <div>
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
