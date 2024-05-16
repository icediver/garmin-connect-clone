import Link from 'next/link';
import styles from './NotFound.module.scss';
export function NotFound() {
	return (
		<div className={styles.notFound}>
			<div className={styles.container}>
				<h1>Page not found</h1>
				<div>The page you are looking for does not exist.</div>
				<Link href="/" className="btn-primary h-11">
					Back to Garmin Connect
				</Link>
			</div>
		</div>
	);
}
