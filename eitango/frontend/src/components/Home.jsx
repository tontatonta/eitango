import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 items-center justify-center">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    正答率のグラフ
                </h3>
                <p className="mt-2 text-gray-500 dark:text-neutral-400 text-lg">
                    Let's learn English words together!
                </p>
            </div>
            <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 items-center justify-center">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    継続日数のGitHub風カレンダー
                </h3>
                <p className="mt-2 text-gray-500 dark:text-neutral-400 text-lg">
                    Let's learn English words together!
                </p>
                <div className="github-calendar">
                    {/* Your GitHub calendar component goes here */}
                </div>
            </div>
        </div>
    );
};

export default Home;