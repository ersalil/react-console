// export const UseApi = (props, load) => {
//   fetch("http://localhost:8000/yash", {
//     signal: AbortSignal.timeout(5000),
//   })
//     .then((response) => response.json())
//     .then((json) => {
//       props(json);
//       load(false);
//     })
//     .catch((error) => {
//       console.log("fetch data failed", error);
//     });
// };

export const UseColApi = (props) => {
  fetch("http://localhost:8000/ship/col")
    .then((response) => response.json())
    .then((json) => {
      props(json);
    })
    .catch((error) => {
      console.log("fetch data failed", error);
    });
};

export const UseApiBar = (props, load) => {
  fetch("http://localhost:8000/bar/data")
    .then((response) => response.json())
    .then((json) => {
      props(json);
      load(false);
      // console.log(json);
    })
    .catch((error) => {
      console.log("fetch data failed", error);
    });
};

export const UseApiLine = (setD, load, shipName) => {
  fetch("http://localhost:8000/line/data")
    .then((response) => response.json())
    .then((json) => {
      console.log(json[shipName]);
      setD(json[shipName]);
      load(false);
    })
    .catch((error) => {
      console.log("fetch data failed", error);
    });
};

async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 5 } = options;
  const abortController = new AbortController();
  const id = setTimeout(() => abortController.abort(), timeout);
  const response = await fetch(resource, {
    ...options,
    signal: abortController.signal,
  });
  clearTimeout(id);
  return response;
}

//Table Data with exceptional handling
export async function UseApiTemp(props, load) {
  try {
    const response = await fetchWithTimeout("http://localhost:8000/table/data", {
      timeout: 10000,
    });
    const data = await response.json();
    props(data);
    load(false);
    console.log(data);
  } catch (error) {
    if (error.name == "TimeoutError") {
      console.log("Time out Error");
    } else if (error.name == "AbortError") {
      console.log("Abort Error");
    } else if (error.name == "TypeError") {
      console.log("Type Error");
    } else {
      console.log("fetch data failed", error);
    }
  }
}

export default UseApiTemp;
