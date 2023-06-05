/* eslint-disable react/prop-types */

import styles from "./Avatar.module.css";

export const Avatar = ({ src, alt, hasBorder = true }) => {
	return (
		<img
			className={hasBorder ? styles.avatarWithBorder : styles.avatar}
			src={src}
			alt={alt}
		/>
	);
};
