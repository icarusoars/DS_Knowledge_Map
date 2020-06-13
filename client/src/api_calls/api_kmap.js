const axios = require("axios");

const instance = axios.create({
  baseURL: "https://ds-knowledge-map.now.sh"
  // baseURL: "http://127.0.0.1:8080"
});

export const getCircleMap = async () => {
  
  try{
    const res = await instance.get("/kmap_static/circlemap.json");
    console.log(res.data)
    return res.data;
  } catch (error) {
    console.log(error)
  }
};

export const getCircleInfo = async (md_path) => {
  try{
    const res = await instance.get("/kmap_static/" + md_path);
    return res.data;
  } catch (error) {
    console.log(error)
  }
};
