/* eslint-disable linebreak-style */

import {useState} from 'react';

/* eslint-disable require-jsdoc */

// function for fetching data from api for bar graph
export const useApiBar = () => {
  // state for storing data
  const [fetchedData, setFetchedData] = useState([]);
  // state for storing loading status
  const [isLoading, setIsLoading] = useState(true);
  // state for storing error status
  const [error, setError] = useState();
  const sendRequest = (url, method = 'GET', body = null, headers = {}) => {
    setIsLoading(true);
    fetch(url, {
      method,
      body,
      headers,
    })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.message);
          }
          return response.json();
        })
        .then((json) => {
          setIsLoading(false);
          setFetchedData(json);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
          throw err;
        });
  };
  return {fetchedData, isLoading, error, sendRequest};
};


export const useApiLine = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const sendRequest = (url, method = 'GET', body = null, headers = {}) => {
    setIsLoading(true);
    fetch(url, {
      method,
      body,
      headers,
    })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.message);
          }
          return response.json();
        })
        .then((json) => {
          setIsLoading(false);
          setFetchedData(json);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
          throw err;
        });
  };
  return {fetchedData, isLoading, error, sendRequest};
};

export const useApiTab = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const sendRequest = (url, method = 'GET', body = null, headers = {}) => {
    setIsLoading(true);
    fetch(url, {
      method,
      body,
      headers,
    })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.message);
          }
          return response.json();
        })
        .then((json) => {
          setIsLoading(false);
          setFetchedData(json);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
          throw err;
        });
  };
  return {fetchedData, isLoading, error, sendRequest};
};

export const useApiCol = () => {
  const [fetchedColumn, setFetchedColumn] = useState([]);
  const [error, setError] = useState();
  const fetchColumn = (url, method = 'GET', body = null, headers = {}) => {
    fetch(url, {
      method,
      body,
      headers,
    })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.message);
          }
          return response.json();
        })
        .then((json) => {
          setFetchedColumn(json);
        })
        .catch((err) => {
          setError(err.message);
          throw err;
        });
  };
  return {fetchedColumn, error, fetchColumn};
};

export default useApiTab;


