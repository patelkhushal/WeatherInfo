import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchWeather({ payload }: any) {
  const apiKey = "<your_api_key>"
  const json = yield fetch('https://api.openweathermap.org/data/2.5/weather?q=' + payload + '&appid=' + apiKey)
        .then(response => response.json(), );    
  yield put({ type: "WEATHER_RECEIVED", payload: json, });
}

function* actionWatcher() {
     yield takeLatest('ADD_TO_HISTORY', fetchWeather)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}