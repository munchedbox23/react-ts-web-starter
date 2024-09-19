export enum AppRoutes {
  MAIN = "main",
  PHOTOS = "photos",
  TODOS = "todos",
  NOT_FOUND = "not_found",
}

export const appRoutes: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.PHOTOS]: "/photos",
  [AppRoutes.TODOS]: "/todos",
  [AppRoutes.NOT_FOUND]: "*",
};
