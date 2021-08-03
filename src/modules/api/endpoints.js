export const JOBS = "jobs";
export const PROVIDERS = "providers";

const ENDPOINTS = {
  [JOBS]: {
    uri: "/jobs",
    method: "GET",
  },
  [PROVIDERS]: {
    uri: "/providers",
    method: "GET",
  },
};

export default ENDPOINTS;
