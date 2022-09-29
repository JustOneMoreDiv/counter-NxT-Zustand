import create from "zustand";

interface TreeState {
	test: string;
	parentColor: string;
	childOneColor: string;
	childTwoColor: string;
	grandChildOneOneColor: string;
	grandChildOneTwoColor: string;
	grandChildTwoOneColor: string;
	grandChildTwoTwoColor: string;
	setColor: () => void;
}

export const useBearStore = create<TreeState>()((set) => ({
	test: "bg-yellow-400",
	parentColor: "bg-red-400",
	childOneColor: "bg-blue-400",
	childTwoColor: "bg-blue-500",
	grandChildOneOneColor: "bg-purple-400",
	grandChildOneTwoColor: "bg-purple-500",
	grandChildTwoOneColor: "bg-orange-400",
	grandChildTwoTwoColor: "bg-orange-500",
	setColor: () => set(() => ({ parentColor: "bg-yellow-400" })),
}));
