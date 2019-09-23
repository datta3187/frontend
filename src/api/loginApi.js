import axios from "axios";
import config from "../config";

export const onLogin = payload => {
  const URL = config.apiUrl;
  return axios(`${URL}barong/identity/sessions`, {
    method: "POST",
    headers: {
      "content-type": "application/json" // whatever you want
    },
    data: payload
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const onSignup = payload => {
  const URL = config.apiUrl;
  return axios(`${URL}api/v2/identity/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json" // whatever you want
    },
    data: payload
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

// Kyc Api
export const onKyc = payload => {
  const URL = config.apiUrl
  debugger
  return axios(`${URL}/barong/resource/documents`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json" // whatever you want
    },
    data: payload
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

// user/emailconfirmation/:id

export const verifyEmail = id => {
  var data = {
    token: id
  }
  const URL = config.apiUrl;
  return axios(`${URL}api/v2/identity/users/email/confirm_code`, {
    method: "POST",
    headers: {
      "content-type": "application/json" // whatever you want
    },
    data: data
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

// googleLoginSignup
export const googleLoginSignup = payload => {
  const URL = config.apiUrl;
  return axios(`${URL}user/googlelogin`, {
    method: "POST",
    headers: {
      "content-type": "application/json" // whatever you want
    },
    data: payload
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

// forgot password
export const forgotPasswordApi = payload => {
  const URL = config.apiUrl;
  return axios(`${URL}user/forgotpassword`, {
    method: "POST",
    headers: {
      "content-type": "application/json" // whatever you want
    },
    data: payload
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

// reset password
export const resetMyPasswordApi = payload => {
  const URL = config.apiUrl;
  return axios(`${URL}user/resetpassword`, {
    method: "POST",
    headers: {
      "content-type": "application/json" // whatever you want
    },
    data: payload
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

// reset verification email
export const resendVerification = payload => {
  const URL = config.apiUrl;
  return axios(`${URL}user/resend`, {
    method: "POST",
    headers: {
      "content-type": "application/json" // whatever you want
    },
    data: payload
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
