import classNames from 'classnames';
import calculateTimeDurationService from '~/services/calculateTimeDurationService';
import { ExportIcon, SortIcon } from '../Icons';
import sortPilotListService from '~/services/sortPilotListService';
import { DISTANCE, DOWN, PILOT_EMAIL, PILOT_NAME, PILOT_NUMBER, PILOT_TIME, UP } from '~/constants';
import { useEffect, useState } from 'react';
import ListPlaceholder from '../ListPlaceholder';

function Table({ pilotList }) {
    const [sortMode, setSortMode] = useState({
        nameMode: UP,
        emailMode: UP,
        numberMode: UP,
        distanceMode: UP,
        timeMode: UP,
    });

    const [display, setDisplay] = useState({
        nameDisplay: false,
        emailDisplay: false,
        numberDisplay: false,
        distanceDisplay: false,
        timeDisplay: true,
    });

    const [onScrollStyles, setOnScrollStyles] = useState(false);

    useEffect(() => {
        sortPilotListService(pilotList, PILOT_TIME, sortMode.timeMode);
        if (sortMode.timeMode === UP) {
            setSortMode((prev) => ({ ...prev, timeMode: DOWN }));
        } else {
            setSortMode((prev) => ({ ...prev, timeMode: UP }));
        }
    }, []);

    const handleTimeDisplay = (pilot) => {
        // calculate last time
        let minutes = calculateTimeDurationService(pilot.lastSeen);

        if (minutes < 1) {
            // if < 1mins
            return 'recently';
        } else if (minutes < 2) {
            return `${Math.floor(minutes)} minute ago`;
        } else if (minutes < 11) {
            // return the last time if it is below 11 minutes
            return `${Math.floor(minutes)} minutes ago`;
        }
    };

    const handleSortMode = (list, sortBy, mode) => {
        sortPilotListService(list, sortBy, mode);

        switch (sortBy) {
            case PILOT_NAME:
                if (sortMode.nameMode === UP) {
                    setSortMode((prev) => ({ ...prev, nameMode: DOWN }));
                } else {
                    setSortMode((prev) => ({ ...prev, nameMode: UP }));
                }
                break;
            case PILOT_EMAIL:
                if (sortMode.emailMode === UP) {
                    setSortMode((prev) => ({ ...prev, emailMode: DOWN }));
                } else {
                    setSortMode((prev) => ({ ...prev, emailMode: UP }));
                }
                break;
            case PILOT_NUMBER:
                if (sortMode.numberMode === UP) {
                    setSortMode((prev) => ({ ...prev, numberMode: DOWN }));
                } else {
                    setSortMode((prev) => ({ ...prev, numberMode: UP }));
                }
                break;
            case DISTANCE:
                if (sortMode.distanceMode === UP) {
                    setSortMode((prev) => ({ ...prev, distanceMode: DOWN }));
                } else {
                    setSortMode((prev) => ({ ...prev, distanceMode: UP }));
                }
                break;
            case PILOT_TIME:
                if (sortMode.timeMode === UP) {
                    setSortMode((prev) => ({ ...prev, timeMode: DOWN }));
                } else {
                    setSortMode((prev) => ({ ...prev, timeMode: UP }));
                }
                break;

            default:
                break;
        }
    };

    function exportUserInfo(userInfo) {
        const fileData = JSON.stringify(userInfo);
        const blob = new Blob([fileData], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'pilot-info.json';
        link.href = url;
        link.click();
    }

    const handleOnScroll = (e) => {
        if (e.target.scrollLeft > 0) {
            setOnScrollStyles(true);
        } else {
            setOnScrollStyles(false);
        }
    };

    return (
        <div
            className="p-8 rounded-lg bg-white overflow-x-auto scroll-smooth"
            onScroll={(e) => {
                handleOnScroll(e);
            }}
        >
            <table className="table-auto w-full">
                <thead className="border-b border-gray-200 text-left text-neutral-500">
                    <tr className="text-base">
                        <th className="hidden md:table-cell whitespace-nowrap pr-4 pb-4 w-12 text-center">#</th>
                        <th
                            className={classNames(
                                'whitespace-nowrap sticky -left-8 bg-white px-4 pb-4 w-44 before:absolute before:-top-8 before:-right-8 before:bottom-0 before:w-8 before:shadow-[inset_10px_0_8px_-8px_#00000026]',
                                {
                                    'before:content-none': !onScrollStyles,
                                },
                            )}
                        >
                            <div
                                className="inline-block cursor-pointer hover:text-neutral-600"
                                onClick={() => {
                                    setDisplay((prev) => {
                                        const _prev = { ...prev };

                                        for (const key in _prev) {
                                            if (_prev.hasOwnProperty(key)) {
                                                _prev[key] = false;
                                            }
                                        }

                                        return { ..._prev, nameDisplay: true };
                                    });
                                    handleSortMode(pilotList, PILOT_NAME, sortMode.nameMode);
                                }}
                            >
                                <span>Name</span>
                                <span
                                    className={classNames([
                                        'inline-block',
                                        'ml-2',
                                        'cursor-pointer',
                                        { invisible: !display.nameDisplay },
                                        { 'rotate-180': sortMode.nameMode === DOWN ? true : false },
                                    ])}
                                >
                                    <SortIcon width="20px" height="20px" className="inline -mt-1" />
                                </span>
                            </div>
                        </th>
                        <th className="whitespace-nowrap px-4 pb-4 w-72">
                            <div
                                className="inline-block cursor-pointer hover:text-neutral-600"
                                onClick={() => {
                                    setDisplay((prev) => {
                                        const _prev = { ...prev };

                                        for (const key in _prev) {
                                            if (_prev.hasOwnProperty(key)) {
                                                _prev[key] = false;
                                            }
                                        }

                                        return { ..._prev, emailDisplay: true };
                                    });
                                    handleSortMode(pilotList, PILOT_EMAIL, sortMode.emailMode);
                                }}
                            >
                                <span>Email address</span>
                                <span
                                    className={classNames([
                                        'inline-block',
                                        'ml-2',
                                        'cursor-pointer',
                                        { invisible: !display.emailDisplay },
                                        { 'rotate-180': sortMode.emailMode === DOWN ? true : false },
                                    ])}
                                >
                                    <SortIcon width="20px" height="20px" className="inline -mt-1" />
                                </span>
                            </div>
                        </th>
                        <th className="whitespace-nowrap px-4 pb-4 w-52 min-w-[170px]">
                            <div
                                className="inline-block cursor-pointer hover:text-neutral-600"
                                onClick={() => {
                                    setDisplay((prev) => {
                                        const _prev = { ...prev };

                                        for (const key in _prev) {
                                            if (_prev.hasOwnProperty(key)) {
                                                _prev[key] = false;
                                            }
                                        }

                                        return { ..._prev, numberDisplay: true };
                                    });
                                    handleSortMode(pilotList, PILOT_NUMBER, sortMode.numberMode);
                                }}
                            >
                                <span>Phone number</span>
                                <span
                                    className={classNames([
                                        'inline-block',
                                        'ml-2',
                                        'cursor-pointer',
                                        { invisible: !display.numberDisplay },
                                        { 'rotate-180': sortMode.numberMode === DOWN ? true : false },
                                    ])}
                                >
                                    <SortIcon width="20px" height="20px" className="inline -mt-1" />
                                </span>
                            </div>
                        </th>
                        <th className="whitespace-nowrap px-4 pb-4 w-56  min-w-[170px]">
                            <div
                                className="inline-block cursor-pointer hover:text-neutral-600"
                                onClick={() => {
                                    setDisplay((prev) => {
                                        const _prev = { ...prev };

                                        for (const key in _prev) {
                                            if (_prev.hasOwnProperty(key)) {
                                                _prev[key] = false;
                                            }
                                        }

                                        return { ..._prev, distanceDisplay: true };
                                    });
                                    handleSortMode(pilotList, DISTANCE, sortMode.distanceMode);
                                }}
                            >
                                <span>Drone distance</span>
                                <span
                                    className={classNames([
                                        'inline-block',
                                        'ml-2',
                                        'cursor-pointer',
                                        { invisible: !display.distanceDisplay },
                                        { 'rotate-180': sortMode.distanceMode === DOWN ? true : false },
                                    ])}
                                >
                                    <SortIcon width="20px" height="20px" className="inline -mt-1" />
                                </span>
                            </div>
                        </th>
                        <th className="whitespace-nowrap px-4 pb-4 w-56 min-w-[130px]">
                            <div
                                className="inline-block cursor-pointer hover:text-neutral-600"
                                onClick={() => {
                                    setDisplay((prev) => {
                                        const _prev = { ...prev };

                                        for (const key in _prev) {
                                            if (_prev.hasOwnProperty(key)) {
                                                _prev[key] = false;
                                            }
                                        }

                                        return { ..._prev, timeDisplay: true };
                                    });
                                    handleSortMode(pilotList, PILOT_TIME, sortMode.timeMode);
                                }}
                            >
                                <span>Last seen</span>
                                <span
                                    className={classNames([
                                        'inline-block',
                                        'ml-2',
                                        'cursor-pointer',
                                        { invisible: !display.timeDisplay },
                                        { 'rotate-180': sortMode.timeMode === DOWN ? true : false },
                                    ])}
                                >
                                    <SortIcon width="20px" height="20px" className="inline -mt-1" />
                                </span>
                            </div>
                        </th>
                        <th className="whitespace-nowrap px-4 pb-4 text-center w-24">
                            <span>Action</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {pilotList.length > 0 &&
                        pilotList.map((pilot, index) => {
                            let noPilotInfo = false;
                            if (!pilot.pilotInfo) {
                                noPilotInfo = true;
                            }

                            return (
                                <tr key={index} className="border-b border-gray-200 text-lg">
                                    <td className="hidden md:block whitespace-nowrap pr-4 py-4 text-slate-800 font-medium text-center">
                                        {index + 1}
                                    </td>
                                    <td
                                        className={classNames(
                                            'whitespace-nowrap sticky bg-white p-4 -left-8 before:absolute before:top-0 before:-right-8 before:bottom-0 before:w-8 before:shadow-[inset_10px_0_8px_-8px_#00000026] text-slate-800 font-medium text-ellipsis',
                                            {
                                                'before:content-none': !onScrollStyles,
                                            },
                                        )}
                                    >
                                        {noPilotInfo
                                            ? 'Unknown'
                                            : pilot?.pilotInfo?.firstName + ' ' + pilot?.pilotInfo?.lastName}
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-slate-800 font-medium overflow-hidden text-ellipsis">
                                        {!noPilotInfo && pilot?.pilotInfo?.email ? pilot.pilotInfo.email : 'Unknown'}
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-slate-800 font-medium">
                                        {!noPilotInfo && pilot?.pilotInfo?.phoneNumber
                                            ? pilot.pilotInfo?.phoneNumber
                                            : 'Unknown'}
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-slate-800 font-medium">
                                        <p
                                            className={classNames([
                                                'max-w-[120px]',
                                                'py-2 rounded-full',
                                                'text-center',
                                                {
                                                    'text-rose-500': Math.round(pilot.distance / 1000) >= 0,
                                                    'bg-rose-200': Math.round(pilot.distance / 1000) >= 0,
                                                },
                                                {
                                                    'text-amber-500': Math.round(pilot.distance / 1000) >= 40,
                                                    'bg-amber-200': Math.round(pilot.distance / 1000) >= 40,
                                                },
                                                {
                                                    'text-green-500': Math.round(pilot.distance / 1000) >= 80,
                                                    'bg-green-200': Math.round(pilot.distance / 1000) >= 80,
                                                },
                                            ])}
                                        >
                                            {Math.round(pilot.distance / 1000) + 'm'}
                                        </p>
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-slate-800 font-medium">
                                        {handleTimeDisplay(pilot)}
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-slate-800 font-medium flex justify-center">
                                        <div>
                                            <button
                                                onClick={() => exportUserInfo(pilot)}
                                                className="block p-2 rounded-full text-rose-500 bg-rose-100 hover:bg-rose-200"
                                                title="export to JSON"
                                            >
                                                <ExportIcon width="22px" height="22px" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            {pilotList.length === 0 && <ListPlaceholder className="my-2" />}
        </div>
    );
}

export default Table;
