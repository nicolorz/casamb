import "./CardWrapper.css";
import { CardItem } from "./CardItem";
import { useState, useEffect } from "react";
import { images } from "../../statics/statics";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useCategoriesContext } from "../../context/CategoriesContext";

export const CardWrapper = () => {
  const { categories } = useCategoriesContext();

  const [visibleImages, setVisibleImages] = useState(images);

  useEffect(() => {
    setVisibleImages(images.filter((img) => categories.includes(img.tag)));
  }, [categories]);

  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    const handler = () => {
      let m = 96;

      if (window.innerWidth >= 1240) {
        m = 96;
      } else if (window.innerWidth >= 996) {
        m = 64;
      } else if (window.innerWidth >= 768) {
        m = 48;
      } else if (window.innerWidth < 768) {
        m = 48;
      }

      const el = document.getElementById("header");
      setHeaderHeight(el.offsetHeight + m);
    };
    window.addEventListener("resize", handler);
    handler();

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <div style={{ marginTop: headerHeight }}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 768: 2, 992: 3, 1200: 4, 1400: 5 }}
      >
        <Masonry gutter="1rem">
          {visibleImages.map((img) => {
            return <CardItem key={img.source} card={img} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};
