import './CardWrapper.css'
import { CardItem } from './CardItem';
import { useState, useEffect } from 'react';
import { images } from "../../statics/statics";
import MagicGrid from "magic-grid";

export const CardWrapper = ({clickedButtons}) => {

    const [visibleImages, setVisibleImages] = useState(images);

    useEffect(() => {
        setVisibleImages(images.filter((img) => clickedButtons.includes(img.tag)));
    }, [clickedButtons]);

    const [headerHeight, setHeaderHeight] = useState(0);
    useEffect(() => {
        const handler = () => {
            let m = 96;

            if(window.innerWidth >= 1240) {
                m = 96;
            } else if (window.innerWidth >= 996) {
                m = 96;
            } else if (window.innerWidth >= 768) {
                m = 96;
            }

            const el = document.getElementById("header");
            setHeaderHeight(el.offsetHeight + m);
        }
        window.addEventListener('resize', handler);
        handler();

        return () => {
            window.removeEventListener('resize', handler);
        }
    }, [])

    let magicGrid = new MagicGrid({
        container: "#container-box", // Required. Can be a class, id, or an HTMLElement.
        static: true, // Required for static content.
        animate: true, // Optional.
    });
      
    magicGrid.listen();
    
    return (
        <div id="container-box" className="card-wrapperz" style={{marginTop: headerHeight}}>
            {visibleImages.map((img) => {
                return (
                    <CardItem 
                    key={img.source} 
                    card={img}
                 />
                )
            })}
        </div>
    )
};