import calculateDronePositionService from './calculateDronePositionService';
import getPilotInfoService from './getPilotInfoService';

async function checkViolatingDronesService(fetchedDrones) {
    // declare limiting radius
    const radius = 100000;
    const violatingDrones = [];

    // check if each drone violate no-fly area by calculating drone distance and make sure distance > radius
    for (const drone of fetchedDrones) {
        const distance = calculateDronePositionService(drone);

        if (distance <= radius) {
            const localTime = new Date();
            const pilotInfo = await getPilotInfoService(drone.serialNumber);

            const newDrone = {
                ...drone,
                distance,
                lastSeen: localTime,
                pilotInfo,
            };
            violatingDrones.unshift(newDrone);
        }
    }

    return violatingDrones;
}

export default checkViolatingDronesService;
