/*
 * @Date: 2021-05-26 12:28:52
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-15 13:42:29
 * @FilePath: \cra-project-template\src\utils\Axios\Axios.d.ts
 */

import * as axios from "axios";

declare module "axios" {
    interface AxiosInstance {
        (config: AxiosRequestConfig): Promise<any>;
    }
}
