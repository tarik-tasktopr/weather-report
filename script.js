const weatherForm = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weather-description');
const errorMessage = document.getElementById('error-message');

const API_KEY = 'your_api_key_here';

weatherForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const city = cityInput.value;
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
    errorMessage.textContent = '';
  } catch (error) {
    errorMessage.textContent = error.message;
    cityName.textContent = '';
    temperature.textContent = '';
    weatherDescription.textContent = '';
  }
});