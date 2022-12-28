function calculateTimeDurationService(time) {
    const currentTime = new Date();
    let diffTime = Math.abs(currentTime - time);

    // convert millisecs to minutes
    diffTime = diffTime / 60000;

    return diffTime;
}

export default calculateTimeDurationService;
