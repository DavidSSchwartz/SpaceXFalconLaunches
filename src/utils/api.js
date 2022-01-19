const fetchData = (url) => {
    try {
      const response = fetch(url).then(res => res.json());
      return response;
    } catch (error) {
      console.log('Error', error);
    }
  };

  export default fetchData;