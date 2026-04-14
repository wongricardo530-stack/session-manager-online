import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config()

export const createSession = async () => {
  const response = await axios.post(
    'https://prod-api.7oc.cl/authentication/v1/authmodule-session',
    {
      api_key: process.env.AUTHMODULE_API_KEY

    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  console.log(response.data + process.env.AUTHMODULE_API_KEY)
  return response.data;
};