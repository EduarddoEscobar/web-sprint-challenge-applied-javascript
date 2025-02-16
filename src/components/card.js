import axios from 'axios';
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  
  //Creates the elements 
  const cardDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgDiv = document.createElement('div');
  const authorImg = document.createElement('img');
  const bySpan = document.createElement('span');

  //Creates the hierarchy for the elements 
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  imgDiv.appendChild(authorImg);
  authorDiv.appendChild(bySpan);

  //Sets the class names for the elements 
  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgDiv.classList.add('img-container');

  //Sets the content for the elements
  headlineDiv.textContent = article.headline;
  authorImg.src = article.authorPhoto;
  bySpan.textContent = article.authorName;

  return cardDiv;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!). 
  // However, the articles do not come organized in a single, neat array. Inspect the response closely! 
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const entryPoint = document.querySelector(selector);
  axios.get(`http://localhost:5000/api/articles`).then((response) => {
    for(const key in response.data.articles) {
      const articles = response.data.articles[key];
      articles.forEach((article) => {
        entryPoint.appendChild(Card(article));
      })
    }
    
  }).catch((error) => {
    console.error(error);
  })
  
}


export { Card, cardAppender }
