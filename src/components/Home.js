import React, { useState, useEffect } from 'react';

function Home() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const options = 'https://newsapi.org/v2/everything?' +
    'domains=techcrunch.com,washingtonpost.com,msnbc.com,billboard.com,bet.com&' +
    'apiKey=1f22fcc3c46b48108ecf580156764f66';


    fetch(options)
      .then(response => response.json())
      .then(data => setNews(data.articles))
      .catch(error => console.error(error));
  }, []);



  const styleH2 = {
    background: '#dfe3ee',
    fontFamily: 'verdana',
    color: '#333',
    margin: '10px',
    maxWidth: '80%'
  }
  const styleAuthor = {
    color: 'red',
    margin: '3.5px',
    fontSize: '7px',
    
  }
 
  const styleImage = {
    maxWidth: '90%',
    marginLeft: '0px',
  }
  
  const styleDiv={
    margin: '18px',
    marginTop: '20px',
    paddingTop: '3px',
    maxWidth:'90%'
  }
  return (
    <div style={styleDiv}>
      <h3>The Press</h3>
      {news.map(article => (
        <div key={article.index}>
          <h4 style={styleH2}>{article.title}</h4>
          <img 
          src={article.urlToImage}
          style={styleImage}
          alt='not available'
          />
          <p >{article.description}</p>
          <div> 
          <a href={article.url} >Read more</a>
          <small style={styleAuthor}>{article.author}</small>

          </div>
        </div>
      ))}
    </div>
  );
}
export default Home;
