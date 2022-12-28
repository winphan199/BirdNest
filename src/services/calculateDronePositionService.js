function calculateDronePositionService({ positionX, positionY }) {
    // declare origin position
    const origin = {
        xPos: 250000,
        yPos: 250000,
    };

    // calculate distance from drone to origin
    const distanceFromDroneToOrigin = Math.sqrt(
        Math.pow(positionX - origin.xPos, 2) + Math.pow(positionY - origin.yPos, 2),
    );

    return distanceFromDroneToOrigin;
}

export default calculateDronePositionService;
