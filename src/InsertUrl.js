import Axios from "axios";
import React, { useState } from "react";
import "./App.css";
function InsertUrl() {
  const [mainError, setMainError] = useState({
    message: "url already exit or giver url id invalid",
    status: false,
  });
  const [redirectTo, setRedirectTo] = useState({
    status: false,
    value: "",
    link:"",
  });
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    url: "",
    slug: "",
  });
  const { url, slug } = userData;
  const onChange = async (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const onSubmit = () => {
    setLoading(true);
    if (url === "") {
      setMainError({ message: "URL can not be empty", status: true });
      setLoading(false);
      return;
    }
    Axios.post("https://amitappshort.herokuapp.com/url", { url, slug })
      .then((response) => {
        setRedirectTo({ status: true, value: response.data.slug ,link:response.data.url});
      })
      .catch((error) => {
        setMainError({
          message: "Already value exists or Url is Incorrect",
          status: true,
        });
        setLoading(false);
      });
  };
  return (
    <div className="mainapp">
      <div className="App">
        {loading && <h1>Loading</h1>}
        {redirectTo.status && (
          <>
            <h3>Your Url is http://localhost:3000/{redirectTo.value}</h3>
            <a href={redirectTo.link}>Click Here To redirect</a>
          </>
        )}
        {!loading && !redirectTo.status && (
          <div className="mainpart">
            <h1 className="heading">Link Short</h1>
            {mainError.status && (
              <div className="alert alert-danger" role="alert">
                {mainError.message}
              </div>
            )}
            <label htmlFor="url" className="urlfinder-label">
              URL
            </label>
            <input
              type="text"
              name="url"
              id="url"
              className="url-input"
              value={url}
              onChange={onChange}
            />
            <label htmlFor="slug" className="urlfinder-label">
              SLUG
            </label>
            <input
              type="text"
              name="slug"
              id="slug"
              className="slug-input"
              value={slug}
              onChange={onChange}
            />
            <button onClick={onSubmit}>Submit</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default InsertUrl;
