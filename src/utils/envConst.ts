interface BaseUrlType {
    development: string;
    production: string;
    test?: string;
}

const BaseUrl: BaseUrlType = {
    development: "http://localhost:8000/", //  开发环境
    test: "http://localhost:5000/", //  开发环境
    production: "https://www.xxxx.com/", //  生产环境
};

export default BaseUrl;
