import React, { useState, useEffect } from "react";

function MyImage({ imageId }) {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://dw-c3fe4d.ingress-daribow.ewp.live/wp-json/wp/v2/media/${imageId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.source_url);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <img src={imageUrl} alt="My Image" />;
}

export default MyImage;
