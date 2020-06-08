const axios = require("axios");

const instance = axios.create({
  baseURL: "https://ds-knowledge-map.now.sh/",
});

export const getCircleMap = async () => {
  
  try{
    const res = await instance.get("/kmap_static/circlemap.json");
    return res.data;
  } catch (error) {
    console.log(error)
  }
};

export const getCircleInfo = async (md_path) => {
  try{
    return await instance.get("/kmap_static/" + md_path);
  } catch (error) {
    console.log(error)
  }
};
