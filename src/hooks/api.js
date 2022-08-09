/* eslint-disable linebreak-style */

import {useState} from 'react';

/* eslint-disable require-jsdoc */

export const useApiBar = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const sendRequest = (url, method = 'GET', body = null, headers = {}) => {
    setIsLoading(true);
    fetch(url+'/bargraph/10', {
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
    fetch(url+'/linegraph', {
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
  const [fetchedColumn, setFetchedColumn] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const sendRequest = (url, method = 'GET', body = null, headers = {}) => {
    setIsLoading(true);
    fetch(url+'/table/data', {
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

    fetch(url+'/ship/col', {
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
          setFetchedColumn(json);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
          throw err;
        });
  };
  return {fetchedData, fetchedColumn, isLoading, error, sendRequest};
};

export default useApiTab;
