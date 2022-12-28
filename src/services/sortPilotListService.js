import calculateTimeDurationService from './calculateTimeDurationService';

const { UP, DOWN, PILOT_NAME, PILOT_EMAIL, PILOT_NUMBER, DISTANCE, PILOT_TIME } = require('~/constants');

function sortPilotListService(pilotList, sortBy, mode) {
    if (mode === UP) {
        switch (sortBy) {
            case PILOT_NAME:
                pilotList.sort((x, y) => {
                    if (
                        x?.pilotInfo?.firstName &&
                        x?.pilotInfo?.lastName &&
                        y?.pilotInfo?.firstName &&
                        y?.pilotInfo?.lastName
                    ) {
                        return `${x.pilotInfo.firstName} ${x.pilotInfo.lastName}`.localeCompare(
                            `${y.pilotInfo.firstName} ${y.pilotInfo.lastName}`,
                        );
                    } else {
                        return 0;
                    }
                });
                break;
            case PILOT_EMAIL:
                pilotList.sort((x, y) => {
                    if (x?.pilotInfo?.email && y?.pilotInfo?.email) {
                        return x.pilotInfo.email.localeCompare(y.pilotInfo.email);
                    } else {
                        return 0;
                    }
                });
                break;
            case PILOT_NUMBER:
                pilotList.sort((x, y) => {
                    if (x?.pilotInfo?.phoneNumber && y?.pilotInfo?.phoneNumber) {
                        return x.pilotInfo.phoneNumber.localeCompare(y.pilotInfo.phoneNumber);
                    } else {
                        return 0;
                    }
                });
                break;
            case DISTANCE:
                pilotList.sort((x, y) => {
                    return x.distance - y.distance;
                });
                break;
            case PILOT_TIME:
                pilotList.sort((x, y) => {
                    const xTime = calculateTimeDurationService(x.lastSeen);
                    const yTime = calculateTimeDurationService(y.lastSeen);
                    return xTime - yTime;
                });
                break;

            default:
                break;
        }
    } else if (mode === DOWN) {
        switch (sortBy) {
            case PILOT_NAME:
                pilotList.sort((x, y) => {
                    if (
                        x?.pilotInfo?.firstName &&
                        x?.pilotInfo?.lastName &&
                        y?.pilotInfo?.firstName &&
                        y?.pilotInfo?.lastName
                    ) {
                        return `${y.pilotInfo.firstName} ${y.pilotInfo.lastName}`.localeCompare(
                            `${x.pilotInfo.firstName} ${x.pilotInfo.lastName}`,
                        );
                    } else {
                        return 0;
                    }
                });
                break;
            case PILOT_EMAIL:
                pilotList.sort((x, y) => {
                    if (x?.pilotInfo?.email && y?.pilotInfo?.email) {
                        return y.pilotInfo.email.localeCompare(x.pilotInfo.email);
                    } else {
                        return 0;
                    }
                });
                break;
            case PILOT_NUMBER:
                pilotList.sort((x, y) => {
                    if (x?.pilotInfo?.phoneNumber && y?.pilotInfo?.phoneNumber) {
                        return y.pilotInfo.phoneNumber.localeCompare(x.pilotInfo.phoneNumber);
                    } else {
                        return 0;
                    }
                });
                break;
            case DISTANCE:
                pilotList.sort((x, y) => {
                    return y.distance - x.distance;
                });
                break;
            case PILOT_TIME:
                pilotList.sort((x, y) => {
                    const xTime = calculateTimeDurationService(x.lastSeen);
                    const yTime = calculateTimeDurationService(y.lastSeen);
                    return yTime - xTime;
                });
                break;

            default:
                break;
        }
    }
}

export default sortPilotListService;
