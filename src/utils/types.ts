import { FC } from "react"
import { RouteComponentProps } from "react-router-dom"

export enum SortOrderEnum {
  DEFAULT = 'default',
  ASCENDING = 'ascending',
  DESCENDING = 'descending'
}

export enum SortCategoriesEnum {
  NAME = 'name',
  SITE = 'site',
  TYPE = 'type',
  STATUS = 'status'
}

export type SortParamsType = {
  order: null | SortOrderEnum
  category: null | SortCategoriesEnum
}

export enum DetailsViewEnum {
  RESULTS,
  FINALIZE
}

export enum TypeEnum {
  CLASSIC,
  SERVER_SIDE,
  MVT,
}

export enum TypeUIEnum {
  CLASSIC = 'Classic',
  SERVER_SIDE = 'Server-side',
  MVT = 'MVT',
}

export enum StatusEnum {
  ONLINE,
  PAUSED,
  STOPPED,
  DRAFT
}

export enum StatusUIEnum {
  DRAFT = 'Draft',
  ONLINE = 'Online',
  PAUSED = 'Paused',
  STOPPED = 'Stopped',
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

export type FetchJSONHookDataType = null | undefined | SitesType | TestsType | TestType

export type DetailsPropsType = {id: string, mode: DetailsViewEnum}

export type DetailsViewType = FC<DetailsPropsType>

export type AppType = FC

export type DashboardViewType = FC

export interface TestsTableRowData extends TestType {
  site: string
}

export type TestsTableRowsData = TestsTableRowData[]

export type TestsTableSortControlTdPropsType = {
  onSortParamsChange: () => void,
  sortCategory: SortCategoriesEnum
  sortParams: SortParamsType
}

export type TestsTablePropsType = {
  items: TestsTableRowsData
}

export type TestsTableRowPropsType = {
  data: TestsTableRowData
}

export type TestsTableSortControlTdComponentType = FC<TestsTableSortControlTdPropsType>

export type TestTableComponentType = FC<TestsTablePropsType>

export type TestTableRowComponentType = FC<TestsTableRowPropsType>

export type RoutePropsType = RouteComponentProps<{testId: string}>