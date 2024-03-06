import type { Component } from 'vue'
import type { RouteRecordRedirectOption, RouteRecordName, RouteMeta } from 'vue-router'

export interface Route {
  path: string,
  name?: RouteRecordName,
  redirect?: RouteRecordRedirectOption,
  meta?: RouteMeta,
  component?: Component,
  children?: Route[],
}