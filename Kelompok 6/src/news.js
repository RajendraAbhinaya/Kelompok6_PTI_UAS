import React, { useState } from "react";

var random = Math.floor(Math.random() * 7);
var url;
var done = 0;

if (random === 0) {
  url = "https://saurav.tech/NewsAPI/top-headlines/category/business/in.json";
} else if (random === 1) {
  url =
    "https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json";
} else if (random === 2) {
  url = "https://saurav.tech/NewsAPI/top-headlines/category/general/in.json";
} else if (random === 3) {
  url = "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";
} else if (random === 4) {
  url = "https://saurav.tech/NewsAPI/top-headlines/category/science/in.json";
} else if (random === 5) {
  url = "https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json";
} else if (random === 6) {
  url = "https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json";
}

export default function News(props) {
  const [news, setNews] = useState({});
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [counter, setCounter] = useState(0);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setNews(data.articles);
    });

  const interval = setInterval(() => {
    try {
      done = 1;
      setTitle(news[counter].title);
      setAuthor(news[counter].author);
      setDescription(news[counter].description);
      setCounter((counter + 1) % news.length);
    } catch (err) {
      console.log("error");
    }
    clearInterval(interval);
  }, 15000);

  if (done === 1 && props.render === 1) {
    return (
      <div>
        <div>
          <h1>News</h1>
          <h3>
            "{title}" by {author}
          </h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
