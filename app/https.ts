import axios from "axios";

const getInfluencerMockData = async () => {
  const endpoint =
    (process.env.NEXT_PUBLIC_SITE_URL ??
      process?.env?.NEXT_PUBLIC_VERCEL_URL ??
      "http://localhost:3000") + "/api/getMockData";
  const { data } = await axios.post(endpoint);
  return data;
};
export default getInfluencerMockData;
