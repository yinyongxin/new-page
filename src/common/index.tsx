export const BgImageList = [
  "https://img.win3000.com/m00/88/f4/4bfb021fbd4c86f1b563f9d837297897.jpg",
];

export const BackgroundClassNameList = [
  "background-circle",
  "background-blue-line",
] as const;

export type BackgroundClassName = (typeof BackgroundClassNameList)[number];

export const paddingObj: Record<Position.types, string> = {
  top: "pt-[6.7rem] pb-4 px-4",
  right: "pr-[6.7rem] pl-4 py-4",
  bottom: "pb-[6.7rem] pt-4 px-4",
  left: "pl-[6.7rem] pr-4 py-4",
};