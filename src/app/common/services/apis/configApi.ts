import * as APIUtil from '../../../core/apiUtils'
import { IHttpResponse, response } from '../../models/http.model'
import { appConfig } from 'src/app/config/appConfig'
import { IAppConfigResponse } from '../../models/config'

export const getAppConfig = (): Promise<IHttpResponse<IAppConfigResponse>> =>
  APIUtil.getApi(`${appConfig.baseURL}/configuration1232`).then(response)
