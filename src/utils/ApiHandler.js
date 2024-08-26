
import axios from "axios";
import ENV from "./env";
import Cookies from "js-cookie";

const responseFormatter = (status, data, error) => {
  return { status, data, error };
}
// const User=()=> { // Rule 2: call hooks in function component
//   const { userToken } = useSelector((state) => state.userDetails); // Rule 1: call hooks in top-level
//   console.log(userToken)
//   return userToken
// }

export const postApiReq = async (url, data) => {
  const route_url = ENV.BASE_URL + url;

  const token = Cookies.get("user-data")

  return await axios.post(route_url, data, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    }
  })
    .then((response) => {
      return responseFormatter(true, response.data, null);
    })
    .catch(e => {
      if (e?.response?.status === 403) {
        Cookies.remove('user-data');
        window.location.href = '/'
      }
      else
        if (e) {
          return responseFormatter(false, null, e?.response?.data || null)
        } else {
          return responseFormatter(false, null, e?.response?.data || null)
        }
    });
}



export const getApiReq = async (url) => {
  const token = Cookies.get("user-data")
  const route_url = ENV.BASE_URL + url;
  return await axios.get(route_url,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
    .then((response) => {
      return responseFormatter(true, response.data, null);
    })
    .catch(e => {
      if (e.response.status === 403) {
        Cookies.remove('user-data');
        window.location.href = '/'
      }
      else
        if (e) {
          return responseFormatter(false, null, e?.response?.data || null)
        } else {
          return responseFormatter(false, null, e?.response?.data || null)
        }
    });
}


export const getImageUrl = async (data) => {
  var image = false
  await postApiReq("/user/upload-asset", data)
    .then((res) => {
      if (res.status) {
        image = res.data.data
      }
      else {
        image = false
      }
    }
    )
    .catch((e) => {
      console.log(e)
    })

  return image
}
export const getMultipleImageUrl = async (data) => {

  var image = false
  await postApiReq("/user/upload-multiple-assets", data)
    .then((res) => {
      if (res.status) {
        console.log(res.data.data, 'multiple imgae')
        image = res.data.data
      }
      else {
        image = false
      }
    }
    )
    .catch((e) => {
      console.log(e)
    })

  return image
}

export const postReq = async (url, data) => {
  const route_url = ENV.BASE_URL + url;
  return await axios.post(route_url, data, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return responseFormatter(true, response.data, null);
    })
    .catch(e => {
      if (e) {
        return responseFormatter(false, null, e?.response?.data || null)
      } else {
        return responseFormatter(false, null, e?.response?.data || null)
      }
    });
}

export const getReq = async (url) => {
  const route_url = ENV.BASE_URL + url;
  return await axios.get(route_url,
    {
      headers:
      {
        Accept: "application/json",
      },
    })
    .then((response) => {
      return responseFormatter(true, response.data, null);
    })
    .catch(e => {
      if (e) {
        return responseFormatter(false, null, e?.response?.data || null)
      } else {
        return responseFormatter(false, null, e?.response?.data || null)
      }
    });
}

export const getStreamStatus = (apiKey, streamId) => {
  const authorizationHeader = {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${apiKey}`,
    },
  };

  try {
    const createStreamResponse = axios.post(
      `${ENV.BASE_URL}/user/get-stream`,
      {
        api_key: apiKey,
        stream_id: streamId,
      },
      {
        headers: {
          "content-type": "application/json",
          authorization: authorizationHeader.headers.authorization, // API Key needs to be passed as a header
        },
      }
    );

    return createStreamResponse;
    if (createStreamResponse) {
      return { data: createStreamResponse };
      // res.statusCode = 200;
      // res.json({ ...createStreamResponse.data });
    } else {
      // res.statusCode = 500;
      // res.json({ error: "Something went wrong" });
    }
  } catch (error) {
    // res.statusCode = 500;

    // Handles Invalid API key error
    if (error.response.status === 403) {
      // res.statusCode = 403;
    }
    // res.json({ error });
  }
};
