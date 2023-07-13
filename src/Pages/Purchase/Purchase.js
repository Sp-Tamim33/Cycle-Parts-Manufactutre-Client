import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import auth from '../../FirebaseInit/Firerebase.Init';
import { Icon } from '@iconify/react';

const Purchase = () => {
    const [increaseButtonDisabled, setIncreaseButtonDisabled] = useState(false);
    const [decreaseButtonDisabled, setDecreaseButtonDisabled2] = useState(false);
    const [user, loading] = useAuthState(auth)
    const { id } = useParams();
    const [product, setProduct] = useState([]);





    const { MinimumOrder } = product;
    const [increaseDecrease, setIncreaseDecrease] = useState(0);
    useEffect(() => {
        fetch(`https://cycle-tools-server.onrender.com/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setIncreaseDecrease(MinimumOrder)
            })
    }, [id, MinimumOrder])

    if (loading) {
        return <Loading />
    }




    const increaseHandler = (available) => {
        if (parseInt(increaseDecrease) <= available) {
            setIncreaseDecrease(parseInt(increaseDecrease) + 1);
            setDecreaseButtonDisabled2(false);
        } else {
            // setDecreaseDisabled(!disabledIncrease);
            toast.error("Sorry, we don't have that many products right now");
            setIncreaseButtonDisabled(true);
        }
    };

    const decreaseHandler = (MinimumOrder) => {
        if (MinimumOrder < increaseDecrease) {
            setIncreaseButtonDisabled(false);
            setIncreaseDecrease(parseInt(increaseDecrease) - 1);
        } else {
            setDecreaseButtonDisabled2(true);
            toast.error(
                `You Must Should Select ${MinimumOrder}pcs of this product`
            );
        }
    };

    const ProductName = product.name;
    const ProductPrice = product.price



    const handlePurchaseOrder = (event) => {
        event.preventDefault();
        const productName = event.target.productName.value;
        const name = event.target.name.value;
        const price = event.target.price.value;
        const email = event.target.email.value;
        const number = event.target.number.value;
        const address = event.target.address.value;

        fetch('https://cycle-tools-server.onrender.com/orders', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                productName,
                name,
                email,
                number,
                address,
                price,
            }),
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    toast.success('Thanks for your Order!');
                    event.target.reset();
                }
            })
    }
    return (
        <div>
            <section className="py-10 text-white">
                <div className="grid lg:px-10 justify-center  lg:grid-cols-2 ">
                    <div className=" border border-orange-500 px-10 pb-7 rounded w-11/12  md:w-8/12 mx-auto">
                        <h1 className="text-center py-5 text-2xl  font-bold">
                            Order information
                        </h1>
                        <form onSubmit={handlePurchaseOrder}>
                            <input
                                value={ProductName}
                                readOnly
                                disabled
                                type="text"
                                placeholder="Type here"
                                className="inpuo mb-3 w-full p-3 rounded border-2 border-orange-500"
                                required
                                name="productName"
                            />
                            <input
                                value={ProductPrice}
                                readOnly
                                disabled
                                type="text"
                                placeholder="Type price"
                                className="inpuo mb-3 w-full p-3 rounded border-2 border-orange-500"
                                required
                                name="price"
                            />
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="input mb-3  w-full p-3 rounded border-2 border-orange-500"
                                required
                                name="name"
                            />
                            <input
                                type="email"
                                name="email"
                                disabled
                                readOnly
                                value={user?.email}
                                placeholder="Type here"
                                className="input mb-3  w-full p-3 rounded border-2 border-orange-500"
                                required
                            />
                            <input
                                type="tel"
                                name="number"
                                placeholder="Enter Your Number"
                                required
                                className="input mb-3  w-full p-3 rounded border-2 border-orange-500"
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder="Enter Your Address"
                                className="input mb-3  w-full p-3 rounded border-2 border-orange-500"
                                required
                            />

                            <button type='submit' className=" w-full bg-black text-white font-bold border-2 border-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-500 rounded-lg text-xl px-5 py-2.5 mt-5 duration-500 text-center mr-2 mb-2 dark:border-orange-500 hover:text-black  dark:hover:bg-orange-500 dark:focus:ring-orange-500">
                                Complete The Purchase
                            </button>
                        </form>
                    </div>
                    <div>
                        <h1 className=" py-5 text-2xl  font-bold">Product Information</h1>
                        <div>
                            <div className="grid justify-center mx-2 items-center  border-b-2 grid-cols-3">
                                <div className=" rounded-xl">
                                    <img src={product?.img} alt="" className='w-36' />
                                </div>
                                <h5 className="font-bold text-left">Name: {product?.name}</h5>
                                <h6 className="font-bold text-center text-primary">
                                    Price: ${product?.price} <small>/pcs</small>
                                </h6>
                            </div>
                            <div className="grid mx-2 py-3">
                                <h6 className="font-bold mt-3 text-secondary  flex justify-between">
                                    <span> Available </span>
                                    <span className="text-primary">
                                        {product?.available} <small>/pcs</small>
                                    </span>
                                </h6>
                                <h6 className="font-bold mt-4 flex justify-between text-secondary">
                                    <span>Minimum Order Quantity</span>
                                    <span className="text-primary"> {product?.MinimumOrder} <small>/pcs</small></span>
                                </h6>
                                <div className="mt-10 overflow-hidden border border-gray-200 text-center py-1  w-40   ">
                                    <button
                                        disabled={decreaseButtonDisabled}
                                        className="w-10  text-black bg-orange-500 "
                                        onClick={() => decreaseHandler(product?.MinimumOrder)}
                                    >
                                        <span className='text-xl pb-2'><Icon className='ml-2' icon="akar-icons:minus" /></span>
                                    </button>
                                    <input
                                        className="w-10  mx-2 font-bold text-black  text-center"
                                        type="text"
                                        value={increaseDecrease}
                                    />
                                    <button
                                        disabled={increaseButtonDisabled}
                                        className="w-10 text-black bg-orange-500 "
                                        onClick={() => increaseHandler(product?.available)}
                                    >
                                        <span className='text-xl pb-2'><Icon className='ml-2' icon="mdi:plus" /></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Purchase;