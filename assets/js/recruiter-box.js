class RecruiterBox {
  apiUrl = "https://jsapi.recruiterbox.com/v1/";
  openingsUrl = `${this.apiUrl}openings`;

  types = {
    OPENINGS: "openings",
  };

  constructor(options) {
    this.options = options;
  }

  getUrl(type, params) {
    // TODO add params

    const typeUrl = this[`${type}Url`];

    return `${typeUrl}?client_name=${this.options?.client_name}`;
  }

  getAll() {
    const url = this.getUrl(this.types.OPENINGS);
    console.log("RecruiterBox ~ getAll ~ url", url);

    // const promise = fetch
  }
}

export default RecruiterBox;
