// News.js
import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 12,
    category: 'general',
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  state = {
    articles: [],
    loading: false,
    page: 1,
    totalResults: 0,
    error: null,
  };

  async fetchNews(page) {
    try {
      const { country, category, pageSize } = this.props;
      const apiKey = 'd34c14befe564593a9ff507a97d7466e';
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        articles: parsedData.articles || [],
        totalResults: parsedData.totalResults,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false, error: "Failed to fetch news!" });
    }
  }

  componentDidMount() {
    this.fetchNews(this.state.page);
  }

  handlePreClick = () => {
    this.setState((prevState) => ({ page: prevState.page - 1 }), () => {
      this.fetchNews(this.state.page);
    });
  };

  handleNextClick = () => {
    const totalPages = Math.ceil(this.state.totalResults / this.props.pageSize);
    if (this.state.page < totalPages) {
      this.setState((prevState) => ({ page: prevState.page + 1 }), () => {
        this.fetchNews(this.state.page);
      });
    }
  };

  render() {
    const { articles, loading, page } = this.state;

    return (
      <div className="container my-3">
        <h1 className="text-center">{this.props.headline}</h1>

        {loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status"></div>
          </div>
        ) : (
          <div className="row">
            {articles.map((article, index) => (
              <div className="col-md-4" key={index}>
                <NewsItem {...article} />
              </div>
            ))}
          </div>
        )}

        <div className="d-flex justify-content-between">
          <button onClick={this.handlePreClick} disabled={page === 1}>Previous</button>
          <button onClick={this.handleNextClick}>Next</button>
        </div>
      </div>
    );
  }
}

export default News;
