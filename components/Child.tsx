function Child(props: any) {
	return (
		<div className='z-1 absolute mt-60 h-40 w-40 rounded-2xl bg-blue-400 first:left-1/4 last:right-1/4'>
			{props.children}
		</div>
	);
}

export default Child;
