# WeatherAPI Node.js Connection

This Node.js project demonstrates how to connect to the WeatherAPI to fetch current weather information for a specific location using the `fetch` API. In this project, we provide a simple `index.js` file that fetches and displays the current weather data for a predefined location.

## Prerequisites

Before running this project, ensure you have the following prerequisites:

- [Node.js](https://nodejs.org/) (at least Node.js 12 or higher)
- WeatherAPI API Key (Get one by signing up at [WeatherAPI](https://www.weatherapi.com/))

## Installation

1. Clone or download this repository to your local machine.

```bash
git clone https://github.com/yourusername/weatherapi-nodejs-project.git
```

2. Navigate to the project directory.

```bash
cd weatherapi-nodejs-project
```

3. Create a `.env` file in the project directory and add your WeatherAPI API Key.

```plaintext
WEATHER_API_KEY=your_api_key_here
```

4. Install project dependencies using npm.

```bash
npm install
```

## Usage

To fetch and display the current weather information, follow these steps:

1. Open the `index.js` file in your code editor.

2. Set the `location` variable to specify the location for which you want to fetch weather data. You can use a city name, postal code, or coordinates.

```javascript
const location = 'San Diego, California';
```

3. Save your changes.

4. Run the project using Node.js:

```bash
node index.js
```

5. The current weather information for the specified location will be displayed in the console.

## Example

Here's an example of what the output might look like in the console:

```json
{
  "location": {
    "name": "San Diego",
    "region": "California",
    "country": "United States of America"
  },
  "current": {
    "temp_c": 23.5,
    "temp_f": 74.3,
    "condition": {
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png"
    },
    "humidity": 61,
    "wind_mph": 5.6,
    "wind_kph": 9.0
  }
}
```

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- Weather data is provided by [WeatherAPI](https://www.weatherapi.com/).
- This project uses the `fetch` API to make HTTP requests.

If you have any questions or encounter issues, please don't hesitate to reach out.

Happy coding!