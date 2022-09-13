import React, { Fragment, useEffect, useState } from "react";
// import { Container, Row, Col } from 'reactstrap';
import "../App.css";
import { createApi } from "unsplash-js";


const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "XlY8WdD7b1wPAfYLJ8TmI8QiRQ5eSDydEBlfgn-cYrw"
});

const PhotoComp = ({ photo }) => {
  const { user, urls } = photo;

  return (
    <Fragment>
      <img className="img" src={urls.regular} />
      <a
        className="credit"
        target="_blank"
        rel="noreferrer"
        href={`https://unsplash.com/@${user.username}`}
      >
        {user.name}
      </a>
    </Fragment>
  );
};

const Body = () => {
  const [data, setPhotosResponse] = useState(null);

  useEffect(() => {
    api.search
      .getPhotos({ query: "cat", orientation: "landscape" })
      .then(result => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    return (
      <div className="feed">
        <ul className="columnUl">
          {data.response.results.map(photo => (
            <li key={photo.id} className="li">
              <PhotoComp photo={photo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export const Home = () => {
  return (
    <main className="root">
      <Body />
    </main>
  );
};
