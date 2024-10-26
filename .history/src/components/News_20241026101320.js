import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 12,
    category: 'science',
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      error: null,
    };
  }

  // Fetching news articles from the API
  async fetchNews(page) {
    try {
      const { pageSize, country, category } = this.props;
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apikey=d34c14befe564593a9ff507a97d7466e&page=${page}&pageSize=${pageSize}`;

      this.setState({ loading: true, error: null });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        articles: parsedData.articles || [],
        totalResults: parsedData.totalResults,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({
        loading: false,
        error:
          "Failed to fetch news 😫! Check Internet Connection🧐! Or Refresh the Page.😵",
      });
    }
  }

  componentDidMount() {
    this.fetchNews(this.state.page);
  }

  fetchMoreData = async () => {
    try {
      const { page, articles } = this.state;
      const { pageSize, country, category } = this.props;

     let url = `https://newsapi.org/v2/top-headlines?country=${country}& 
      this.setState({ loading: true, error: null });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        articles: articles.concat(parsedData.articles || []),
        page: page + 1,
        totalResults: parsedData.totalResults,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching more data:", error);
      this.setState({ loading: false, error: "Failed to fetch more news." });
    }
  };

  render() {
    const { articles, error } = this.state;
    const textColor = this.props.Mode === 'dark' ? 'white' : 'black';

    return (
      <div className={`container my-3 ${this.props.Mode}`}>
        <h1 className="text-center mb-5" style={{ color: textColor }}>
          {this.props.headline}
        </h1>

        {error ? (
          <h2 className="text-center" style={{ color: textColor }}>
            {error}
          </h2>
        ) : (
          <InfiniteScroll
            dataLength={articles.length}
            next={this.fetchMoreData}
            hasMore={articles.length !== this.state.totalResults}
            loader={
              <div className="d-flex justify-content-center my-4">
                <button
                  className="btn btn-primary d-flex align-items-center"
                  type="button"
                  disabled
                >
                  <span className="spinner-grow spinner-grow-sm me-2"aria-hidden="true" ></span>
                  <span role="status">Loading...</span>
                </button>
              </div>
            }
          >
            <div className="container"> 
              <div className="row">
                {articles.map((element, index) => (
                  <div
                    className="col-md-4 mb-4"
                    key={`${element.url}-${index}`}
                  >
                    <NewsItem
                      title={element.title ? element.title.slice(0, 20) : ' '}
                      description={element.description  ? element.description.slice(0, 100)
                        : ' '}
                      Imageurl={element.urlToImage}
                      NewsUrl={element.url}
                      mode={this.props.Mode}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </InfiniteScroll>
        )}
      </div>
    );
  }
}

export default News;
