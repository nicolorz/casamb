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
]

export const CardWrapper = () => {
    return (
        <div className="card-wrapper">
            <CardItem />
        </div>
    )
};