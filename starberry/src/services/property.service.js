import http from "../http-common";

class PropertyDataService {
  getAll() {
    return http.get("/properties?_limit=50");
  }

  get(id) {
    return http.get(`/properties?id=${id}`);
  }
n
  
}

export default new PropertyDataService();