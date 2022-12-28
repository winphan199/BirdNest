import xml2json from './convertXMLtoJSONService';

async function getDroneListService() {
    // link to the prefix used to solve cor policy
    const prefix = 'http://ec2-13-53-62-239.eu-north-1.compute.amazonaws.com:8080/';
    // link to latest found drones in 500m x 500m area
    const url = 'http://assignments.reaktor.com/birdnest/drones';
    // origin
    const origin = 'localhost:3000';

    try {
        // fetch list of drones
        let response = await fetch(`${prefix}${url}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                Origin: origin,
            },
        });
        response = await response.text();

        // parse xml file to DOM
        let xmlContent = response;
        let parser = new DOMParser();
        let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');

        // convert to JSON object
        const jsonString = xml2json(xmlDOM, '');
        const json = JSON.parse(jsonString);

        return json.report.capture.drone;
    } catch (error) {
        console.log(error);
        return error.message;
    }
}

export default getDroneListService;
