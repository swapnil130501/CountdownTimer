import { useEffect, useRef, useState } from "react";

function Timer() {
    const [target, setTarget] = useState(null);
    const [diff, setDiff] = useState(0);
    const id = useRef(null);

    function handleSubmit() {
        id.current = setInterval(function cb() {
            setDiff(new Date(target) - new Date());
        }, 1000);
    }

    useEffect(() => {
        if (diff < 0) {
            clearInterval(id.current);
        }
    }, [diff]);

    const getDays = () => {
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    };

    const getHours = () => {
        const hours = diff % (1000 * 60 * 60 * 24);
        return Math.floor(hours / (1000 * 60 * 60));
    };

    const getMinutes = () => {
        const minutes = diff % (1000 * 60 * 60);
        return Math.floor(minutes / (1000 * 60));
    };

    const getSeconds = () => {
        const seconds = diff % (1000 * 60);
        return Math.floor(seconds / 1000);
    };

    return (
        <>
            <h1 className="text-3xl font-bold text-center mt-8 text-gray-800">Countdown Timer</h1>
            <div className="flex justify-center mt-8">
                <input
                    type="datetime-local"
                    onChange={(e) => setTarget(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 mr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    onClick={handleSubmit}
                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors"
                >
                    Start
                </button>
            </div>
            <div className="flex justify-center mt-8">
                <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                    <ul className="grid grid-cols-4 gap-6 text-center">
                        <li className="text-2xl font-semibold">
                            <span className="block text-indigo-500">{getDays()}</span> Days
                        </li>
                        <li className="text-2xl font-semibold">
                            <span className="block text-indigo-500">{getHours()}</span> Hours
                        </li>
                        <li className="text-2xl font-semibold">
                            <span className="block text-indigo-500">{getMinutes()}</span> Minutes
                        </li>
                        <li className="text-2xl font-semibold">
                            <span className="block text-indigo-500">{getSeconds()}</span> Seconds
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Timer;
