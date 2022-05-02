import React from "react";
import Lottie from 'react-lottie';
import animationData from './animation.json';
import * as S from './Home.styles';


export default function Home() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
		}
	};
	return (
		<S.Animation>
			<Lottie options={defaultOptions} width={500} height={700} />
		</S.Animation>
	)
}