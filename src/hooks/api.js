/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
let fullData = undefined;
// const url = process.env.REACT_APP_MAIN_URL; // url where data is hosted by api

// to fetch data of coloumns of table
export const UseApiCol = (props) => {
  fetch(`${process.env.REACT_APP_MAIN_URL}/ship/col`)
      .then((response) => response.json())
      .then((json) => {
        props(json);
      })
      .catch((error) => {
        console.log('fetch data failed', error);
      });
};

// to fetch data for bar graph
export const UseApiBar = (props, load) => {
  fetch(`${process.env.REACT_APP_MAIN_URL}/bargraph/10`)
      .then((response) => response.json())
      .then((json) => {
        props(json);
        load(false);
        console.log(json);
      })
      .catch((error) => {
        console.log('fetch data failed', String(error));
      });
};

// to fetch data for line graph
export const UseApiLine = (setD, load, ship) => {
  if (fullData === undefined) {
    fetch(`${process.env.REACT_APP_MAIN_URL}/linegraph`)
        .then((response) => response.json())
        .then((json) => {
          fullData = json;
          setD(json[ship]);
          load(false);
        })
        .catch((error) => {
          console.log('fetch data failed', error);
        });
  } else {
    setD(fullData[ship]);
    load(false);
  }
};

// to fetch data for table
async function fetchWithTimeout(resource, options = {}) {
  const {timeout = 5} = options;
  const abortController = new AbortController();
  const id = setTimeout(() => abortController.abort(), timeout);
  const response = await fetch(resource, {
    ...options,
    signal: abortController.signal,
  });
  clearTimeout(id);
  return response;
}

// table data with exceptional handling
export async function UseApiTab(props, load) {
  try {
    const response = await fetchWithTimeout(`${process.env.REACT_APP_MAIN_URL}/table/data`, {timeout: 10000});
    const data = await response.json();
    props(data);
    load(false);
    console.log(data);
  } catch (error) {
    if (error.name == 'TimeoutError') {
      console.log('Time out Error');
    } else if (error.name == 'AbortError') {
      console.log('Abort Error');
    } else if (error.name == 'TypeError') {
      console.log('Type Error');
    } else {
      console.log('fetch data failed', error);
    }
  }
}

export default UseApiTab;
