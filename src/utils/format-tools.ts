import { SitesType, StatusEnum, TestType, TypeEnum } from "./types"

export const getSiteString = (item: TestType, sites: SitesType): string => {
  const index = sites.findIndex(site => site.id === item.siteId)
  let url: string | URL = sites[index].url
  url = new URL(url)
  return url.hostname.startsWith('www.')
    ? url.hostname.replace('www.','')
    : url.hostname
}

export const composeRegularCaseString = (value: TypeEnum | StatusEnum): string => {
  return `${value[0]}${value.slice(1).toLowerCase()}`
}