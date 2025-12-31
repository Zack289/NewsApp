import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  // document.title=`${this.capitalizeFirstLetter(props.category)} - News App`

  const capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  //   constructor(props){
  //     super(props);
  //     // console.log("I am form inside the constructor.")
  //     this.state={
  //       articles : [],
  //       loading: false,
  //       page: 1,
  //       totalResults: 0
  //   }
  //   document.title=`${this.capitalizeFirstLetter(this.props.category)} - News App`
  // } 

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    //  this.setState({loading: true});
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);

    // this.setState({articles: parseData.articles,
    //    totalResults: parseData.totalResults,
    //    loading: false
    //   })
    props.setProgress(100);
  }

  useEffect(()=>{
    updateNews();
    // eslint-disable-next-line
  }, [])

  // async componentDidMount(){
  //   // console.log("hello from cdm")
  //   // let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
  //   //  this.setState({loading: true});
  //   // let data =await fetch(url)
  //   // let parseData = await data.json();
  //   // this.setState({articles: parseData.articles,
  //   //    totalResults: parseData.totalResults,
  //   //    loading: false
  //   //   })
  //
  //   this.updateNews();
  // }


 const fetchMoreData = async() => {
  //  this.setState({page: this.state.page + 1});
   setPage(page + 1)
   const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
  //  this.setState({loading: true});
  let data =await fetch(url)
  let parseData = await data.json();

  setArticles(articles.concat(parseData.articles));
  setTotalResults(parseData.totalResults)
  setLoading(loading)

  // this.setState({articles: this.state.articles.concat(parseData.articles),
  //    totalResults: parseData.totalResults,
  //    loading: false
  //   })
  };
  

  // const handlePrevClick = async () => {
  //   console.log("previous")
  //   // if(this.state.page <= 1) return;

  //   //  let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page - 1}&pageSize=${props.pageSize}&pagesize=${props.pageSize}`;
  //   //     this.setState({loading: true});

  //   // let data =await fetch(url)
  //   // let parseData = await data.json();
  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: parseData.articles,
  //   //   loading: false
  //   // })

  //   // this.setState({page: this.state.page - 1})
  //   setPage(page - 1);
  //   updateNews();
  // } 

  // const handleNextClick = async () => {
  //   console.log("next")
  //   // if(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)) return;
  //   //  let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page + 1}&pageSize=${props.pageSize}&pagesize=${props.pageSize}`;
  //   //  this.setState({loading: true});
  //   // let data =await fetch(url)
  //   // let parseData = await data.json();
  //   // this.setState({
  //   //   page: this.state.page + 1,
  //   //   articles: parseData.articles,
  //   //   loading: false
  //   // })

  //   // this.setState({page: this.state.page + 1})
  //   setPage(page + 1);
  //   updateNews();
  // } 

  return (
    <>
      <h1 className='text-center ' style={{margin: '50px 0',marginTop: '90px'}}>
        <strong>News App - Top Headlines From {capitalizeFirstLetter(props.category)}</strong>
      </h1>

      { loading && <Spinner/> }

      <InfiniteScroll
  dataLength={articles.length}
  next={fetchMoreData}
  hasMore={articles.length < totalResults}
  loader={<Spinner />}
  // endMessage={
  //   <h4 className="text-center my-3">
  //     You have reached the end of the page.
  //   </h4>
  // }
>

        
        <div className="container">
          <div className="row my-3">
            {//!this.state.loading&&
              articles.map((element)=>{
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0,45) : ""}
                      description={element.description ? element.description.slice(0,88) : ""}
                      imageurl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                )
              })
            }
          </div>
            <h1 className="text-center">You have reached the end of the page.</h1>
          
        </div>
      </InfiniteScroll>

      {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
      </div> */}
    </>
  )
}


News.defaultProps={
  country: 'us',
  pageSize: 8,
  category:'general'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News
