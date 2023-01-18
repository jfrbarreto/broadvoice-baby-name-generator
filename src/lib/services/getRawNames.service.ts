export const getRawNamesService = async () => {
  return fetch(
    "https://data.cityofnewyork.us/api/views/25th-nujf/rows.json"
  ).then((data) => {
    return data.json();
  });
};
