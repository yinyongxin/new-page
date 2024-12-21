import AppBox from "../components/app-box";
import FullScreen from "../components/full-screen";

const FullPages = () => {
	return (
		<>
			<FullScreen>
				<div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 p-4 sm:p-20 gap-6 sm:gap-8">
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						1
					</AppBox>
				</div>
			</FullScreen>
		</>
	);
};

export default FullPages;
