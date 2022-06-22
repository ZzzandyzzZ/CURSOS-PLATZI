import fetch from 'node-fetch';

const get = async () => {
    try {
      const initialData = await fetch('https://rickandmortyapi.com/api');
      const initialDataJson = await algoMas.json();
      console.log(initialDataJson);
    } catch (error) {
      console.error(error);
    }
  };
get();
