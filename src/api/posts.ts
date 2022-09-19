import http from "@/plugins/http";

export const getPosts = () => {
  return http.request({ method: "get", url: "/api/user" });
};
