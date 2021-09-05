export type dataType = {
  title: string,
  subList: dataType,
}[];

export type movieDataType = {
  title: string,
  labels: string[],
  showTimes: string[],
  img: string
}

export interface NavListType {
  data: dataType,
}

export type navStateType = {
  isVisibleNav: boolean,
  categories: dataType,
}

export type repertoireStateType = {
  movies: movieDataType[],
}