// reportWebVitals.js

// Function to send web vitals data to your backend API
function sendWebVitalsData(data) {
    // Add your API endpoint URL here
    const apiUrl = 'http://localhost:5000/api/web-vitals';

    // Use fetch or any other HTTP library to send the data to the server
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to send web vitals data to the server.');
            }
        })
        .catch(error => {
            console.error(error);
        });
}

// Function to record web vitals and send data to the server
function onReportWebVitals(metric) {
    switch (metric.name) {
        case 'navigation': {
            // This is a navigation timing metric
            const { name, startTime, value } = metric;
            sendWebVitalsData({ name, startTime, value });
            break;
        }
        case 'first-input-delay': {
            // This is a first input delay metric
            const { name, value } = metric;
            sendWebVitalsData({ name, value });
            break;
        }
        case 'largest-contentful-paint': {
            // This is a largest contentful paint metric
            const { name, startTime, value } = metric;
            sendWebVitalsData({ name, startTime, value });
            break;
        }
        // Add more cases for other web vitals if needed
        // case 'cumulative-layout-shift':
        //   // ...
        //   break;
        // case 'layout-shift':
        //   // ...
        //   break;
        default:
            // Do nothing for unknown metrics
            break;
    }
}

export default onReportWebVitals;

