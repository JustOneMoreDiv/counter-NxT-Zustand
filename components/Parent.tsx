import { useBearStore } from "../store/useBearStore";

function Parent(props: any) {
	const color = useBearStore((state) => state.parentColor);
	const handleColorChange = useBearStore((state) => state.setColor);

	return (
		<>
			<div
				className={`mt-40 flex h-52 w-52 cursor-pointer rounded-2xl ${color}`}
				onClick={handleColorChange}
			>
				{props.children}
			</div>
		</>
	);
}

export default Parent;
