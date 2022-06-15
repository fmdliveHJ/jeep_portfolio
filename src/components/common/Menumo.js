function Menumo({ size, setOpen, children }) {
	//모달크기는 비구조화 할당으로 받아서 적용
	const btn = {
		cursor: 'pointer',
		fontSize: '0.75rem',
		color: '#fff',
		position: 'absolute',
		top: 30,
		right: 30,
	};

	return (
		<aside className='pop'>
			{/* 해당 컴포넌트 호출 시점에 자식으로 집어넣은 내용을 불러옴 */}
			<div className='con'>{children}</div>
			<span className='close' style={btn} onClick={() => setOpen(false)}>
				close
			</span>
		</aside>
	);
}

export default Menumo;
