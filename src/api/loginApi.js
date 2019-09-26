import axios from "axios";
import config from "../config";



export const onLogin = payload => {
  const URL = config.apiUrl;

  return axios(`${URL}/identity/sessions`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
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
  return axios(`${URL}/identity/users`, {
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


// user/emailconfirmation/:id

export const verifyEmail = id => {
  var data = {
    token: id
  }
  const URL = config.apiUrl;
  return axios(`${URL}/identity/users/email/confirm_code`, {
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

// to send email - forgot password
export const forgotPasswordApi = payload => {
  const URL = config.apiUrl;
  return axios(`${URL}/identity/users/password/generate_code`, {
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

// To reset password
export const resetPassword = payload => {
  const URL = config.apiUrl;
  return axios(`${URL}/identity/users/password/confirm_code`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    data: payload
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

// send confirmation email
export const resendVerification = payload => {
  const URL = config.apiUrl;
  return axios(`${URL}/identity/users/email/generate_code`, {
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
