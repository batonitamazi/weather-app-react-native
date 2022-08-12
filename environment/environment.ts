const production = true;
export const environment = {
    production: false,
    tempServer: "http://localhost:5000",
    basePath: production ? "https://api.openweathermap.org/data/2.5" : "http://localhost:4444",
    key: "c3f4a1234628a0e9f356eb5a43648a89",
};