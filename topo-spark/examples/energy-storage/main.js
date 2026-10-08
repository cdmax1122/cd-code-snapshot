import { TopologyGraph } from '../../src/index.js';
import { adaptEnergyStorageData } from './EnergyStorageAdapter.js';
import { WeatherOverlay } from './effects/WeatherOverlay.js';
import sunnyData from './data/sunny.json';
import rainyData from './data/rainy.json';

const graph = new TopologyGraph('topologyCanvas');
const weather = new WeatherOverlay('weatherCanvas');
const sunnyBtn = document.getElementById('sunnyBtn');
const rainyBtn = document.getElementById('rainyBtn');

async function switchScene(scene) {
  const isSunny = scene === 'sunny';
  sunnyBtn.classList.toggle('active', isSunny);
  rainyBtn.classList.toggle('active', !isSunny);
  weather.setScene(scene);
  await graph.loadData(adaptEnergyStorageData(isSunny ? sunnyData : rainyData));
}

sunnyBtn.addEventListener('click', () => switchScene('sunny'));
rainyBtn.addEventListener('click', () => switchScene('rainy'));

switchScene('sunny');
