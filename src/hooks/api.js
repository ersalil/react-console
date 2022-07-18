export const UseApi = (props, load) => {
    fetch('http://localhost:8000/ship/data')
    .then((response) => response.json())
    .then((json) => {
        props(json);
        load(false);
    })
    .catch((error) => {
        console.log('fetch data failed', error);
    });
};

export const UseColApi = (props) => {
    fetch('http://localhost:8000/ship/col')
    .then((response) => response.json())
    .then((json) => {
        props(json);
    })
    .catch((error) => {
        console.log('fetch data failed', error);
    });
};

export const UseApiBar = (props, load) => {
    fetch('http://localhost:8000/bar/data')
      .then((response) => response.json())
      .then((json) => {
      props(json);
      load(false);
      console.log(json);
})
      .catch((error) => {
        console.log('fetch data failed', error);
      });
};

export const UseApiLine = (setD, load, shipName) => {
    fetch('http://localhost:8000/line/data')
    .then((response) => response.json())
    .then((json) => {
        console.log(json[shipName]);
        setD(json[shipName]);
        load(false);
    })
    .catch((error) => {
        console.log('fetch data failed', error);
    });
};

export default UseApi;