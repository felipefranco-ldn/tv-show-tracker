export const compareShows = <T, k extends keyof T>(
  showOne: T,
  showTwo: T,
  key: k
) => {
  if (showOne[key] < showTwo[key]) {
    return -1;
  } else if (showOne[key] === showTwo[key]) {
    return 0;
  } else {
    return 1;
  }
};
