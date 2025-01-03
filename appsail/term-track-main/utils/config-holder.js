

let config;


class ConfigHolder {
  static set config(_config) {
    config = _config || {};
  }

  static get config() {
    return config;
  }
    
    static get isAuthorized() {
      return config.isAuthorized
  }
}


export { ConfigHolder, ConfigHolder as default };