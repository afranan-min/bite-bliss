import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    let options = props.options || [];
    let priceOptions = options.map(option => option.size);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState(priceOptions[0] || "");
    let finalPrice = qty * (options.find(option => option.size === size)?.price || 0);

    const handleAddToCart = async () => {
        let food = data.find(item => item.id === props.foodItem._id) || {};
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty, size });

    };

    useEffect(() => {
        setSize(priceRef.current?.value || priceOptions[0]);
    }, [priceOptions]);

    return (
        <div>
            <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
                <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>

                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-danger rounded' style={{color:'white'}} onChange={(e) => setQty(e.target.value)} value={qty}>
                            {Array.from({ length: 6 }, (_, i) => i + 1).map(i => (
                                <option key={i} value={i}>{i}</option>
                            ))}
                        </select>
                        <select className='m-2 h-100 bg-danger rounded' style={{color:'white'}} ref={priceRef} onChange={(e) => setSize(e.target.value)} value={size}>
                            {priceOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            {finalPrice}/-
                        </div>
                    </div>
                    <hr />
                    <button className='btn btn-danger justify-center ms-2' onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
