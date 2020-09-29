import Axios from "axios";
import React, { useEffect, useState } from "react";

const Redirectpage = () => {
  const [notFound, setNotFound] = useState(true);
  useEffect(() => {
    Axios.get(`http://localhost:8080/${window.location.href.substring(22)}`)
      .then((response) => {
        console.log(response.data.exisiting.url);
        window.location.href = response.data.exisiting.url;
        setNotFound(false);
      })
      .catch((error) => {
        console.log("pagenotfound");
      });
  }, []);
  return (
    <div>
      {notFound && <h1>Page not Found</h1>}
      {!notFound && <h1>Amit is Redirecting</h1>}
    </div>
  );
};

export default Redirectpage;
