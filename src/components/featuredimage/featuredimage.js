import React, { useState, useEffect } from "react";

function FeaturedImage({ pageId }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://dw-c3fe4d.ingress-daribow.ewp.live/wp-json/wp/v2/projects/${pageId}?_embed`
    )
      .then((response) => response.json())
      .then((data) => {
        const featuredImage = data._embedded["wp:featuredmedia"][0];
        setImageUrl(featuredImage.source_url);
      });
  }, []);

  return <img src={imageUrl} alt="Featured Image" />;
}

export default FeaturedImage;
