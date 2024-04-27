import styles from './Loader.module.scss';
export function Loader() {
	return (
		<div className={styles.centerBody}>
			<div className={styles.loaderCircle}>
				<span></span>
			</div>
		</div>
	);
}
