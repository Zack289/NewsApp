// import React, { useEffect, useState } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner'
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";



// const News= (props)=> {
//   const [articles, setArticles] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [page, setPage] = useState(1)
//   const [totalResults, setTotalResults] = useState(0)
//   // document.title=`${this.capitalizeFirstLetter(props.category)} - News App`
// }
// const capitalizeFirstLetter = (string)=>{
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// //   constructor(props){
// //     super(props);
// //     // console.log("I am form inside the constructor.")
// //     this.state={
// //       articles : [],
// //       loading: false,
// //       page: 1,
// //       totalResults: 0
// //   }
// //   document.title=`${this.capitalizeFirstLetter(this.props.category)} - News App`
// // } 

// const updateNews=async()=>{
//   props.setProgress(10);
//   const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
//   //  this.setState({loading: true});
//   setLoading(true);
//   let data =await fetch(url);
//   props.setProgress(30);
//   let parseData = await data.json();
//     props.setProgress(70);
//     setArticles( parseData.articles)
//     setTotalResults(parseData.totalResults)
//     setLoading(false)


//   // this.setState({articles: parseData.articles,
//   //    totalResults: parseData.totalResults,
//   //    loading: false
//   //   })
//       props.setProgress(100);

// }

// useEffect(()=>{
//     updateNews();
// }, [])

// // async componentDidMount(){
// //   // console.log("hello from cdm")
// //   // let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
// //   //  this.setState({loading: true});
// //   // let data =await fetch(url)
// //   // let parseData = await data.json();
// //   // this.setState({articles: parseData.articles,
// //   //    totalResults: parseData.totalResults,
// //   //    loading: false
// //   //   })

// //   this.updateNews();
// // }

//  const fetchMoreData = async() => {
//   //  this.setState({page: this.state.page + 1});
//    setPage(page + 1)
//    const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
//   //  this.setState({loading: true});
//   let data =await fetch(url)
//   let parseData = await data.json();

//   setArticles(articles.concat(parseData.articles));
//   setTotalResults(parseData.totalResults)
//   setLoading(loading)

//   // this.setState({articles: this.state.articles.concat(parseData.articles),
//   //    totalResults: parseData.totalResults,
//   //    loading: false
//   //   })
//   // };



// const handlePrevClick= async()=>{
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

//     // this.setState({page: this.state.page - 1})
//     setPage(psge-1)
//     updateNews();

// } 

// const handleNextClick= async ()=>{
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
//       setPage(psge+1)

//    updateNews();

// } 

   
//     return (
//       <>
//       <h1 className='text-center my-3' style={{margin: '50px 0'}}><strong>News App - Top Headlines From {capitalizeFirstLetter(props.category)}</strong> </h1>
//      { loading && <Spinner/>}

//      <InfiniteScroll
//           dataLength={articles.length}
//           next={fetchMoreData}
//           hasMore={articles.length < totalResults}
//           loader={<h4><Spinner/></h4>}  
//         >

//         <div className="container">
//       <div className="row my-3">
//      {//!this.state.loading&&
//      articles.map((element)=>{
//         return <div className="col-md-4" key={element.url}>
//             <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
//           </div>
//         })
//         }
//        </div>
//        <h1 className="text-center">You have reached the end of the page.</h1>
//        </div>
// </InfiniteScroll>
//           {/* <div className="container d-flex justify-content-between">
//             <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
//             <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//           </div> */}
//       </>
//     )
//   }


// News.defaultProps={
//     country: 'us',
//     pageSize: 8,
//     category:'general'
//   }
// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string
// }

// export default News



// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  old app js file$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// import React, { Component } from 'react';
// import Navbar from './components/Navbar';
// import News from './components/News';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';
// import LoadingBar from "react-top-loading-bar";


// export default class App extends Component {
//   pageSize=15;
//   apiKey=process.env.REACT_APP_NEWS_API

//   state={
//     progress: 0
//   }

//   setProgress=(progress)=>{
//     this.setState({progress: progress})
//   }
//   render() {
//     return (
//       <Router  future={{
//     v7_startTransition: true,
//     v7_relativeSplatPath: true,
//   }}>
//         <Navbar />
//          <LoadingBar
//         color="#f11946"
//         progress={this.state.progress}
//         height={3}
//         // onLoaderFinished={() => setProgress(0)}
//       />
//         <Routes>
//           <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general" />} />
//           <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="us" category="business" />} />
//           <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
//           <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general" />} />
//           <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="us" category="health" />} />
//           <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="us" category="science" />} />
//           <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
//           <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
//         </Routes>
//       </Router>
//     );
//   }
// }
