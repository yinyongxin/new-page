export const BgImageList = [
	"https://img.win3000.com/m00/88/f4/4bfb021fbd4c86f1b563f9d837297897.jpg",
	"https://img.win3000.com/m00/cc/df/5b9661a69b7801391711ed40e04e581f.jpg",
	"https://img.win3000.com/m00/fb/59/4d0f9a65e7613252192ccd9ce579a68a.jpg",
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
