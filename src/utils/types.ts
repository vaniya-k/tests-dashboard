import { FC } from "react"

export enum TypeEnum {
  CLASSIC = 'CLASSIC',
  SERVER_SIDE = 'SERVER_SIDE',
  MVT = 'MVT',
}

export enum StatusEnum {
  DRAFT = 'DRAFT',
  ONLINE = 'ONLINE',
  PAUSED = 'PAUSED',
  STOPPED = 'STOPPED',
}

export type SiteType = {
  id: number
  url: string
}

export type TestType = {
  id: number
  name: string
  type: TypeEnum
  status: StatusEnum
  siteId: number
}

export type TestsType = TestType[]

export type NetworkStatusType = {
  isLoading: boolean | null
  hasErroredOut: boolean | null
}

export type FetchHookDataType = null | undefined | TestsType

export type ResultsPropsType = {id: string}

export type ResultsViewType = FC<ResultsPropsType>

export type AppType = FC

export type DashboardViewType = FC