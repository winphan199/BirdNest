async function getPilotInfoService(serialNumber) {
    // link to the prefix used to solve cor policy
    const prefix = 'https://proxyanywhere.13.53.62.239.nip.io/';
    // link to pilot info
    const url = `http://assignments.reaktor.com/birdnest/pilots/${serialNumber}`;

    try {
        let response = await fetch(prefix + url);

        if (response.status === 200) {
            response = await response.json();
        } else {
            console.log(response);
            response = {};
        }

        return response;
    } catch (error) {
        // console.log(error);
        return error.message;
    }
}

export default getPilotInfoService;
