import { Show, useContext } from "solid-js";
import AppBox from "../../components/app-box";
import AppText from "../../components/app-text";
import { cn } from "../../utils/style";
import { AppContext } from "../../app-conetent";
import { BackgroundClassNameList, BgImageList } from "../../common";
import Icon from "../../components/icon";

const BgSetting = () => {
	const { background, setBackground } = useContext(AppContext);
	const prev = () => {
		if (background.type === "css") {
			const index = BackgroundClassNameList.indexOf(background.className);
			setBackground?.({
				className: BackgroundClassNameList[index - 1],
			});
		}
		if (background.type === "image") {
			const index = BgImageList.indexOf(background.image.src);
			setBackground?.({
				image: { src: BgImageList[index - 1] },
			});
		}
	};
	const next = () => {
		if (background.type === "css") {
			const index = BackgroundClassNameList.indexOf(background.className);
			setBackground?.({
				className: BackgroundClassNameList[index + 1],
			});
		}
		if (background.type === "image") {
			const index = BgImageList.indexOf(background.image.src);
			setBackground?.({
				image: { src: BgImageList[index + 1] },
			});
		}
	};
	return (
		<div class="row-span-4">
			<AppText title={6}>背景设置</AppText>
			<div class="grid grid-cols-2 mt-2 gap-3">
				<AppBox
					class={cn("flex justify-center items-center py-4 cursor-pointer")}
					bgFreground={background.type === "css"}
					onClick={() => {
						setBackground?.({
							type: "css",
						});
					}}
				>
					CSS样式
				</AppBox>
				<AppBox
					class="flex justify-center items-center py-4 cursor-pointer"
					bgFreground={background.type === "image"}
					onClick={() => {
						setBackground?.({
							type: "image",
						});
					}}
				>
					图片
				</AppBox>
			</div>
			<AppBox class="mt-4 grid grid-cols-[1fr_auto] p-4 gap-4">
				<div>
					<div
						class={cn("size-full rounded-xl aspect-video", {
							[background.className]: background.type === "css",
						})}
					>
						<Show when={background.type === "image"}>
							<img
								src={background.image.src}
								class="size-full object-cover rounded-xl"
								alt="backgroundImage"
							/>
						</Show>
					</div>
				</div>
				<div class="flex flex-col justify-center gap-4">
					<Icon name="ArrowUp" class="cursor-pointer" onClick={prev} />
					<Icon name="ArrowDown" class="cursor-pointer" onClick={next} />
				</div>
			</AppBox>
			<AppText size="lg" class="mt-4">
				磨砂效果
			</AppText>
			<div class="grid grid-cols-[auto_1fr] gap-4 mt-4">
				<AppBox
					class="px-6 py-4 cursor-pointer"
					bgFreground={background.backdropBlur.flag}
					onClick={() => {
						setBackground?.({
							backdropBlur: {
								...background.backdropBlur,
								flag: !background.backdropBlur.flag,
							},
						});
					}}
				>
					{background.backdropBlur.flag ? "开" : "关"}
				</AppBox>
				<AppBox class="grid grid-cols-3 divide-x divide-gray-400 overflow-hidden">
					<div
						class={cn("flex justify-center items-center cursor-pointer", {
							"bg-black/30 text-white": background.backdropBlur.size === "sm",
						})}
						onClick={() => {
							setBackground?.({
								backdropBlur: {
									size: "sm",
									flag: background.backdropBlur.flag,
								},
							});
						}}
					>
						小
					</div>
					<div
						class={cn("flex justify-center items-center cursor-pointer", {
							"bg-black/30 text-white":
								background.backdropBlur.size === "default",
						})}
						onClick={() => {
							setBackground?.({
								backdropBlur: {
									size: "default",
									flag: background.backdropBlur.flag,
								},
							});
						}}
					>
						默认
					</div>
					<div
						class={cn("flex justify-center items-center cursor-pointer", {
							"bg-black/30 text-white": background.backdropBlur.size === "md",
						})}
						onClick={() => {
							setBackground?.({
								backdropBlur: {
									size: "md",
									flag: background.backdropBlur.flag,
								},
							});
						}}
					>
						大
					</div>
				</AppBox>
			</div>
		</div>
	);
};
export default BgSetting;
