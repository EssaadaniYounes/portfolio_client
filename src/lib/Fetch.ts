import axios from "axios";

class Fetch {
  private static instance: Fetch;
  private readonly API_URL = process.env.NEXT_PUBLIC_API_URL;
  private readonly Accept = "application/json";
  private constructor() {}

  public static getInstance() {
    if (!Fetch.instance) {
      Fetch.instance = new Fetch();
    }

    return Fetch.instance;
  }

  public async getAll(url: string, headers?: any) {
    try {
      const data = await axios.get(this.API_URL + url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...headers,
        },
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public async post(url: string, data: any, headers?: any) {
    const res = await axios({
      method: "POST",
      url: this.API_URL + url,
      headers: {
        Accept: this.Accept,
        ...headers,
      },
      data,
    });
    return res;
  }
  public async put(url: string, data: any, headers?: any) {
    const res = await axios({
      method: "PUT",
      url: this.API_URL + url,
      headers: {
        Accept: this.Accept,
        ...headers,
      },
      data,
    });
    return res;
  }

  public async delete(url: string, headers?: any) {
    const res = await axios({
      method: "DELETE",
      url: this.API_URL + url,
      headers: {
        Accept: this.Accept,
        ...headers,
      },
    });
    return res.data;
  }
}

export default Fetch;
