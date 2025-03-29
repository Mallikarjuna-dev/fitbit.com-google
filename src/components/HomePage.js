import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux';
import { PiGreaterThan } from "react-icons/pi";

const HomePage = () => {
    // const dispatch = useDispatch();
    // const { products, loading, error } = useSelector((state) => state.product);
    // console.log(products, "hdbjhdbhjbdhj");

    // useEffect(() => {
    //     dispatch(fetchProducts());
    // }, [dispatch]);

    return (
        <div className="text-center text-gray-700">
            {/* 📌 Top Section */}
            <div className="font-semibold w-full bg-blue-100 py-5 space-y-3 px-4">
                <h1 className="text-lg md:text-xl font-bold">
                    Google Store is the home for all things Fitbit.
                </h1>
                <p>
                    Shop below or get help with your Fitbit account{" "}
                    <Link
                        href="/"
                        className="text-blue-600 underline hover:bg-blue-200 rounded-sm px-0.5"
                    >
                        here
                    </Link>
                    .
                </p>
            </div>

            <div className="px-4 md:px-[30%] my-16 md:my-36 font-semibold space-y-2">
                <p className="text-sm md:text-base">Pixel and Fitbit</p>
                <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                    Smartwatches and trackers to keep you moving.
                </h1>
            </div>

            <div className="bg-[#f4f3ef] font-semibold flex flex-col md:flex-row rounded-4xl mt-10 md:mt-20 items-center">
                {/* Left Content */}
                <div className="px-6 md:px-28 w-full md:w-[50%] flex flex-col items-center text-center md:text-left space-y-5">
                    <p className="text-sm md:text-base">Now in two sizes</p>
                    <h1 className="text-3xl md:text-6xl font-bold">Google Pixel Watch 3</h1>
                    <p className="text-sm md:text-base">Goals. Guidance. Gorgeous.</p>
                    <button className="border-2 font-semibold rounded-md px-5 py-2">
                        Find Retailers
                    </button>
                </div>
                {/* Right Image */}
                <div className="h-64 md:h-[700px] w-full md:w-[50%] bg-[url('/Images/watch-img.png')] bg-contain bg-center md:bg-right bg-no-repeat"></div>
            </div>

            <div className="bg-[#f8f9fb] h-auto md:h-[300px] py-5 font-semibold rounded-4xl mt-16 md:mt-28 px-4">
                <div className="h-32 md:h-[160px] bg-[url('/Images/watch-sub.png')] bg-contain bg-center bg-no-repeat"></div>
                <div className="space-y-3">
                    <h1 className="text-2xl md:text-3xl font-bold">Which one is right for you?</h1>
                    <Link
                        href="#"
                        className="text-blue-700 flex items-center justify-center space-x-2 hover:underline"
                    >
                        <span>Compare all</span> <PiGreaterThan className="text-xl" />
                    </Link>
                </div>
            </div>

            <div className="bg-[#e4f5fd] font-semibold flex flex-col md:flex-row rounded-4xl mt-16 md:mt-28 items-center">
                {/* Left Content */}
                <div className="px-6 md:px-24 w-full md:w-[50%] flex flex-col items-center text-center md:text-left space-y-5">
                    <p className="text-sm md:text-base">Fitbit Premium</p>
                    <h1 className="text-3xl md:text-5xl font-bold leading-snug">
                        Boost your fitness routine with Fitbit Premium.
                    </h1>
                    <p className="text-sm md:text-base">
                        Access a full library of workouts and mindfulness sessions led by
                        Fitbit’s expert trainers. Get started with 6 months of Fitbit
                        Premium included with your smartwatch or tracker.
                    </p>
                </div>
                {/* Right Image */}
                <div className="h-64 md:h-[700px] w-full md:w-[50%] bg-[url('/Images/mobile-img.jpg')] rounded-4xl bg-contain bg-center md:bg-right bg-no-repeat"></div>
            </div>
        </div>
    );
}

export default HomePage;
