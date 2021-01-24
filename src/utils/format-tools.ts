import { SitesType, TestType } from "./types"

export const getSiteString = (item: TestType, sites: SitesType): string => {
  const index = sites.findIndex(site => site.id === item.siteId)
  let url: string | URL = sites[index].url
  url = new URL(url)
  return url.hostname.startsWith('www.')
    ? url.hostname.replace('www.','')
    : url.hostname
}