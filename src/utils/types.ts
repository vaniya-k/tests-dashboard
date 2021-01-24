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

export interface TestType {
  id: number
  name: string
  type: TypeEnum
  status: StatusEnum
  siteId: number
}

export type TestsType = TestType[]

export type SitesType = SiteType[]

export type RequestCycleType = {
  isLoading: boolean | null
  hasErroredOut: boolean | null
}

export type FetchJSONHookItemsType = null | undefined | TestsType

export type FetchJSONHookSitesType = null | undefined | SitesType

export type FetchJSONHookDataType = null | undefined | SitesType | TestsType

export type ResultsPropsType = {id: string}

export type ResultsViewType = FC<ResultsPropsType>

export type AppType = FC

export type DashboardViewType = FC

export type TestsTablePropsType = {
  items: FetchJSONHookItemsType
  sites: FetchJSONHookSitesType
}

interface TestsTableRowData extends TestType {
  site: string
}
export type TestsTableRowPropsType = {
  data: TestsTableRowData
}

export type TestTableComponentType = FC<TestsTablePropsType>

export type TestTableRowComponentType = FC<TestsTableRowPropsType>