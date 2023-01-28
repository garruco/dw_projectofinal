import React, { useState, useEffect } from "react";

function FeaturedImage({ pageId, type }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://dw-c3fe4d.ingress-daribow.ewp.live/wp-json/wp/v2/${type}/${pageId}?_embed`
    )
      .then((response) => response.json())
      .then((data) => {
        const featuredImage = data._embedded["wp:featuredmedia"][0];
        setImageUrl(featuredImage.source_url);
      });
  }, []);

  return <img src={imageUrl} alt="Featured Image" className="featured-img"/>;
}

export default FeaturedImage;
