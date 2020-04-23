import React from 'react';

const NewsContent = (props) => {
  //TODO: conditionally render color
  const numEntries = props.numEntries ? props.numEntries : props.articles.length;
    return props.articles.splice(0, numEntries).map((article) => (
      <tr>
        <th>
          <p> {article.title} <br></br>
            <span> {article.description} </span>
          </p>
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

export default NewsList;
