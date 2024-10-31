import { API_REGION, API_VERSION } from "../data/constants";

export const fetchMobs = async () => {
  const response = await fetch(
    `https://maplestory.io/api/${API_REGION}/${API_VERSION}/mob/?&count=50&startPosition=0`
  );
  const data = await response.json();
  return data;
};

export const fetchMobImageById = async (id: number) => {
  const response = await fetch(
    `https://maplestory.io/api/${API_REGION}/${API_VERSION}/mob/${id}/render/stand`
  );
  return response.url;
};
