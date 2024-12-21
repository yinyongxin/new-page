import Plus from "lucide-solid/icons/plus";
import AppBox from "../components/app-box";
import FullScreen from "../components/full-screen";
import AppText from "../components/app-text";

type PageMangeProps = {
	open: boolean;
};
const PageMange = (props: PageMangeProps) => {
	return (
		<FullScreen open={props.open}>
			<header class="flex justify-center">
        <AppText title={6}>页面管理</AppText>
      </header>
			<div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 sm:p-20 gap-6 sm:gap-8">
				<AppBox class="aspect-square rounded-xl flex justify-center items-center">
					1
				</AppBox>
				<AppBox class="rounded-xl flex justify-center items-center col-span-3 row-span-4">
					<Plus />
				</AppBox>
			</div>
		</FullScreen>
	);
};
export default PageMange;
