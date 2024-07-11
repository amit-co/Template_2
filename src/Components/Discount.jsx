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

            <div className=" pt-10 w-full mx-28 pb-5 md:w-full ">
                <h1 className="text-customBlack2 text-xl font-bold">From</h1>
                <h1 className="font-normal mt-1 text-2xl">£10.00</h1>
                <div className="flex flex-col mt-3">
                    <label htmlFor="input" className="text-customBlack2 font-bold">Enter amount</label>
                    <input
                        type="text"
                        id="input"
                        className="border sm:w-7/12 sm:max-md:w-9/12 rounded-lg md:w-full outline-none py-2 pl-3 placeholder:text-2xl"
                        placeholder="£"
                        value={amount}
                        onChange={handleAmountChange}
                    />
                </div>

                <div className="flex text-center mx-auto">
                    <div className="flex space-x-2 mt-4 items-center">
                        <button
                            className="text-3xl"
                            onClick={() => {
                                setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
                            }}
                        >
                            <FaSquareMinus  />
                        </button>
                        <input
                            type="number"
                            className={`outline-none border rounded-lg  ${quantity < 10 ? "pl-12 md:max-lg:pl-5" : "sm:pl-7 md:max-lg:pl-5"
                                } sm:text-lg border-black py-1 w-8/12`}
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                        <button
                            className="text-3xl justify-center "
                            onClick={() => setQuantity((prev) => prev + 1)}
                        >
                            <FaSquarePlus />
                        </button>
                    </div>
                </div>
                <button className="sm:text-lg hover:bg-customGray hover:text-customCream2 transition-all duration-300 bg-customBrown2 text-white mt-4 sm:px-10 px-6 py-2 rounded-lg">
                    Add to basket
                </button>
            </div>
        </div>
    )
}