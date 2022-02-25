import GameSavingLoader from './GameSavingLoader';

async function app() {
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving);
  } catch (err) {
    console.log('Ошибка', err);
  }
}

app();
