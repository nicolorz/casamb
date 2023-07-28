import './CardWrapper.css'
import { CardItem } from './CardItem';

const images = [
    {
        source: '/img/001-rubinetteria/rubinetteria-1.jpg',
        tag: 'rubinetteria'
    },
    {
        source: '/img/001-rubinetteria/rubinetteria-2.jpg',
        tag: 'rubinetteria'
    },
    {
        source: '/img/001-rubinetteria/rubinetteria-3.jpg',
        tag: 'rubinetteria'
    },
    {
        source: '/img/001-rubinetteria/rubinetteria-4.jpg',
        tag: 'rubinetteria'
    },
    {
        source: '/img/001-rubinetteria/rubinetteria-5.jpg',
        tag: 'rubinetteria'
    },
    {
        source: '/img/001-rubinetteria/rubinetteria-6.jpg',
        tag: 'rubinetteria'
    },
    {
        source: '/img/002-sanitari/sanitari-1.jpg',
        tag: 'sanitari'
    },
    {
        source: '/img/002-sanitari/sanitari-2.jpg',
        tag: 'sanitari'
    },
    {
        source: '/img/002-sanitari/sanitari-3.jpg',
        tag: 'sanitari'
    },
    {
        source: '/img/002-sanitari/sanitari-4.jpg',
        tag: 'sanitari'
    },
    {
        source: '/img/003-arredobagno/arredobagno-1.jpg',
        tag: 'arredobagno'
    },
    {
        source: '/img/003-arredobagno/arredobagno-2.jpg',
        tag: 'arredobagno'
    },
    {
        source: '/img/003-arredobagno/arredobagno-3.jpg',
        tag: 'arredobagno'
    },
    {
        source: '/img/003-arredobagno/arredobagno-4.jpg',
        tag: 'arredobagno'
    },
    {
        source: '/img/003-arredobagno/arredobagno-5.jpg',
        tag: 'arredobagno'
    },
    {
        source: '/img/004-box-doccia/box-doccia-1.jpg',
        tag: 'boxdoccia'
    },
    {
        source: '/img/004-box-doccia/box-doccia-2.jpg',
        tag: 'boxdoccia'
    },
    {
        source: '/img/004-box-doccia/box-doccia-3.jpg',
        tag: 'boxdoccia'
    },
    {
        source: '/img/005-piatti-doccia/piatti-doccia-1.jpg',
        tag: 'piattidoccia'
    },
    {
        source: '/img/005-piatti-doccia/piatti-doccia-2.jpg',
        tag: 'piattidoccia'
    },
    {
        source: '/img/005-piatti-doccia/piatti-doccia-3.jpg',
        tag: 'piattidoccia'
    },
    {
        source: '/img/006-radiatori/radiatori-1.jpg',
        tag: 'radiatori'
    },
    {
        source: '/img/006-radiatori/radiatori-2.jpg',
        tag: 'radiatori'
    },
    {
        source: '/img/006-radiatori/radiatori-3.jpg',
        tag: 'radiatori'
    },
    {
        source: '/img/007-piastrelle/piastrelle-1.jpg',
        tag: 'piastrelle'
    },
    {
        source: '/img/007-piastrelle/piastrelle-2.jpg',
        tag: 'piastrelle'
    },
    {
        source: '/img/007-piastrelle/piastrelle-3.jpg',
        tag: 'piastrelle'
    },
    {
        source: '/img/007-piastrelle/piastrelle-4.jpg',
        tag: 'piastrelle'
    },
    {
        source: '/img/008-parquet/parquet-1.jpg',
        tag: 'parquet'
    },
    {
        source: '/img/008-parquet/parquet-2.jpg',
        tag: 'parquet'
    },
    {
        source: '/img/008-parquet/parquet-3.jpg',
        tag: 'parquet'
    },
    {
        source: '/img/008-parquet/parquet-4.jpg',
        tag: 'parquet'
    },
    {
        source: '/img/008-parquet/parquet-5.jpg',
        tag: 'parquet'
    },
    {
        source: '/img/008-parquet/parquet-6.jpg',
        tag: 'parquet'
    },
    {
        source: '/img/009-cucine/cucine-1.jpg',
        tag: 'cucine'
    },
    {
        source: '/img/009-cucine/cucine-2.jpg',
        tag: 'cucine'
    },
    {
        source: '/img/009-cucine/cucine-3.jpg',
        tag: 'cucine'
    },
    {
        source: '/img/010-soggiorni/soggiorni-1.jpg',
        tag: 'soggiorni'
    },
    {
        source: '/img/010-soggiorni/soggiorni-2.jpg',
        tag: 'soggiorni'
    },
    {
        source: '/img/010-soggiorni/soggiorni-3.jpg',
        tag: 'soggiorni'
    },
    {
        source: '/img/011-tavoli/tavoli-1.jpg',
        tag: 'tavoli'
    },
    {
        source: '/img/011-tavoli/tavoli-2.jpg',
        tag: 'tavoli'
    },
    {
        source: '/img/011-tavoli/tavoli-3.jpg',
        tag: 'tavoli'
    },
    {
        source: '/img/012-sedie/sedie-1.jpg',
        tag: 'sedie'
    },
    {
        source: '/img/012-sedie/sedie-2.jpg',
        tag: 'sedie'
    },
    {
        source: '/img/012-sedie/sedie-3.jpg',
        tag: 'sedie'
    },
    {
        source: '/img/013-divani/divani-1.jpg',
        tag: 'divani'
    },
    {
        source: '/img/013-divani/divani-2.jpg',
        tag: 'divani'
    },
    {
        source: '/img/013-divani/divani-3.jpg',
        tag: 'divani'
    },
    {
        source: '/img/014-letti/letti-1.jpg',
        tag: 'letti'
    },
]

export const CardWrapper = () => {
    return (
        <div className="card-wrapper">
            {images.map((img) => {
                return (
                    <CardItem key={img.source} card={img} />
                )
            })}
        </div>
    )
};