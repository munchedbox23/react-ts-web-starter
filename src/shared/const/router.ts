export enum AppRoutes {
  MAIN = "main",
  POSTS = "posts",
  TODOS = "todos",
  NOT_FOUND = "not_found",
}

export const appRoutes: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.POSTS]: "/posts",
  [AppRoutes.TODOS]: "/todos",
  [AppRoutes.NOT_FOUND]: "*",
};
