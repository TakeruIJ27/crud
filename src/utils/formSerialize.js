import qs from 'query-string';

const formSerialize = (event) => {
  const e = event.target;

  // This process below will parse the 'Stringified' data from the form.
  const keyValPairs = qs.parse(
    Array.from(e.elements) // convert the HTMLFormControlsCollection to Array
      .map(el => `${encodeURIComponent(el.name)}=${encodeURIComponent(el.value)}`)
      .join('&'), // Stringified
  );

  return keyValPairs;
};


export default formSerialize;
