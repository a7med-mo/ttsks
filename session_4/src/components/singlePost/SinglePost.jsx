
import './singlePost.css'

// eslint-disable-next-line react/prop-types
export default function SinglePost({ title, price, description, image }) {

    return (
        <>
            <div className="singlePost">
                <div className="boxImage">
                    <img src={image} alt={title} />
                </div>
                <div className="boxContent">
                    <h1 className='title'>{title}</h1>
                    <p className='price'>{price} $</p>
                    <p className='description'>{description}</p>

                    <div>
                        
                        <button className='btn'>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
