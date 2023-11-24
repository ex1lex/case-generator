import React, { FC } from 'react';
import './index.scss';

interface Props {
	Svg: React.ElementType;
	title: string;
	onClick: () => void;
	className?: string;
	disabled?: boolean;
}

const SvgBtn: FC<Props> = ({
	Svg,
	title,
	className,
	onClick,
	disabled,
}: Props) => {
	return (
		<button
			onClick={onClick}
			className={`svg-btn ${className} ${
				disabled ? 'svg-btn_type_disabled' : ''
			}`}
			type="button"
			disabled={disabled}
		>
			<span className="svg-btn__title">{title}</span>
			<Svg className="svg-btn__icon" />
		</button>
	);
};

export default SvgBtn;
