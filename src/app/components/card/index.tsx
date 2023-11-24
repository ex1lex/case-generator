import React, { FC, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ReactComponent as Svg } from '../../../resources/reload.svg';
import SvgBtn from '../../../components/svg-btn';
import './index.scss';

interface IActivity {
	activity: string;
	accessibility: number;
	key: string;
	link: string;
	participants: number;
	price: number;
	type: string;
}

const Card: FC = () => {
	const { data, refetch, isFetching } = useQuery<IActivity>({
		queryKey: ['activity'],
		queryFn: () =>
			fetch('https://www.boredapi.com/api/activity').then((res) => res.json()),
	});

	const getNewActivity = useCallback(() => {
		refetch();
	}, [refetch]);

	return (
		<div className="card">
			<h1 className="card__title">Case generator</h1>
			<p className="card__text">{data?.activity}</p>
			<SvgBtn
				className="card__btn"
				title="Reload"
				Svg={Svg}
				disabled={isFetching}
				onClick={getNewActivity}
			/>
		</div>
	);
};

export default Card;
