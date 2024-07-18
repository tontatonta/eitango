import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
// import { Tooltip } from 'react-tooltip';

const Home = () => {
    return (
        <div className="w-full md:w-1/2 mx-auto">
            <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 items-center justify-center h-auto min-h-[300px] md:min-h-[400px]">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    正答率のグラフ
                </h3>
                <p className="mt-2 text-gray-500 dark:text-neutral-400 text-lg">
                    Let's learn English words together!
                </p>
            </div>
            <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 items-center justify-center h-auto min-h-[300px] md:min-h-[400px] mt-4">
                <div className="github-calendar">
                    <CalendarHeatmap
                        startDate={new Date('2016-01-01')}
                        endDate={new Date('2016-04-01')}
                        values={[
                            { date: '2016-01-01', count: 12 },
                            { date: '2016-01-22', count: 122 },
                            { date: '2016-01-30', count: 38 },
                            // ...and so on
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
