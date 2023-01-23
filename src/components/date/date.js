import React, { useState, useEffect } from "react";

function PageDate({ pageId }) {
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(
      `https://dw-c3fe4d.ingress-daribow.ewp.live/wp-json/wp/v2/projects/${pageId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDescription(data.acf.date);
      });
  }, []);

  return <p className="date">{description}</p>;
}

export default PageDate;
