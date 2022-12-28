import { useState, createContext, useEffect, useCallback } from 'react';
import getDroneListService from '~/services/getDroneListService';
import checkViolatingDronesService from '~/services/checkViolatingDronesService';
import calculateTimeDurationService from '~/services/calculateTimeDurationService';

const ViolatingDronesContext = createContext();

function ViolatingDronesProvider({ children }) {
    const [violatingDrones, setViolatingDrones] = useState([]);

    const value = { violatingDrones, setViolatingDrones };

    useEffect(() => {
        const interval = setInterval(() => {
            getViolatingDrones();
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            handleTimeOver10Mins();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const getViolatingDrones = useCallback(async () => {
        let droneList = await getDroneListService();

        droneList = (await checkViolatingDronesService(droneList)) ?? [];

        setViolatingDrones((prevList) => {
            const _prevList = [...prevList];

            // update new distance and position if drone exist
            _prevList.forEach((item) => {
                const target = droneList.find((drone) => {
                    return drone.serialNumber === item.serialNumber;
                });

                if (target && item.distance >= target.distance) {
                    item.distance = target.distance;

                    item.positionX = target.positionX;
                    item.positionY = target.positionY;
                }
            });

            const _newDrones = droneList.filter(
                (drone) =>
                    _prevList.find((currentDrone) => {
                        return currentDrone.serialNumber === drone.serialNumber;
                    }) === undefined,
            );

            return [..._newDrones, ..._prevList];
        });
    }, [setViolatingDrones]);

    const handleTimeOver10Mins = useCallback(() => {
        setViolatingDrones((prevList) => {
            const _prevList = [...prevList].filter((drone) => {
                const minutes = calculateTimeDurationService(drone.lastSeen);

                return minutes < 11;
            });

            return _prevList;
        });
    }, [setViolatingDrones]);

    return <ViolatingDronesContext.Provider value={value}>{children}</ViolatingDronesContext.Provider>;
}

export { ViolatingDronesContext, ViolatingDronesProvider };
