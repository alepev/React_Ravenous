import React from 'react';
import './SearchBar.css';

//"sort_by" parameter in Yelp API query string
const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
  //dynamically creates the list items needed to display the sort options
  //(Best Match, Highest Rated, Most Reviewed).
  //This is to help future proof against potential changes to the Yelp API.
  renderSortByOptions() {
    //iterate through the keys and values of the sortByOptions object and return a list item.
    //The list item elements should use the keys as an attribute, and the values as content.
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key=sortByOptionValue>sortByOption</li>;
    });
  }
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
};

export default SearchBar;
