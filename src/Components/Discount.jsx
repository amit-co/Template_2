import { useState } from "react";
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";


export default function Discount() {
    const [quantity, setQuantity] = useState(1);
    const [amount, setAmount] = useState("");

    const handleQuantityChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setQuantity(value >= 1 ? value : 1);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };
    return (
        <div className="md:flex ">

            <div className="  w-full   md:w-full mt-4">
                <h1 className="text-customBlack2 text-3xl tracking-widest font-bold ml-14">From</h1>
                <h1 className="font-normal mt-1 text-3xl ml-14">$10.00</h1>
                <div className="flex flex-col  ">
                    <label htmlFor="input" className="text-customBlack2 text-3xl mx-auto">Enter amount</label>
                    <input
                        type="text"
                        id="input"
                        className="border sm:w-7/12 sm:max-md:w-9/12 md:w-full rounded-lg outline-none py-3 pl-3 placeholder:text-2xl mt-2"
                        placeholder='$'
                        value={amount}
                        onChange={handleAmountChange}
                    />
                </div>

                <div className="flex flex-col text-center  mt-2">
                    <label htmlFor="input" className="text-customBlack2 text-3xl">Quantity</label>
                    <div className="flex   items-center ml-6 mt-2">

                        <button
                            className="text-5xl text-customBrown2 "
                            onClick={() => {
                                setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
                            }}
                        >
                            <FaSquareMinus />
                        </button>

                        <input
                            type="number"
                            className={`outline-none h-[40px]   bg-white ${quantity < 10 ? "pl-6 md:max-lg:pl-5" : "sm:pl-7 md:max-lg:pl-5"
                                } sm:text-lg lg:w-[10vh] md:w-[60px] w-[20vh] `}
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                        <button
                            className="text-5xl text-customBrown2 "
                            onClick={() => setQuantity((prev) => prev + 1)}
                        >
                            <FaSquarePlus />
                        </button>
                    </div>
                </div>
                <button className="sm:text-lg hover:bg-customGray tracking-widest hover:text-customCream2 transition-all duration-300 bg-customBrown2 text-white mt-4 sm:px-10 px-6 py-3 rounded-lg">
                    Add to basket
                </button>
            </div>
        </div>
    )
}