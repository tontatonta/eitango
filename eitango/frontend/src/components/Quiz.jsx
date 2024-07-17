import React from 'react';

const Quiz = () => {
    return (
        <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 size-1/2 items-center justify-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Apple
            </h3>
            <p className="mt-2 text-gray-500 dark:text-neutral-400 text-lg">
                I have an apple.
            </p>
            <div className="flex mt-4">
                <button className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Check Word
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Unknown Word
                </button>
            </div>
        </div>
    );
}

export default Quiz;
