import React, { useState, useEffect } from "react";

function PageCategory({ pageId }) {
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch(
      `https://dw-c3fe4d.ingress-daribow.ewp.live/wp-json/wp/v2/projects/${pageId}`
    )
      .then((response) => response.json())
      .then((data) => {
        const categories = data.categories;
        if (categories.length > 0) {
          const categoryId = categories[0];
          fetch(
            `https://dw-c3fe4d.ingress-daribow.ewp.live/wp-json/wp/v2/categories/${categoryId}`
          )
            .then((response) => response.json())
            .then((categoryData) => {
              setCategory(categoryData.name);
            });
        }
      });
  }, []);

  return <p className="category">{category}</p>;
}

export default PageCategory;
