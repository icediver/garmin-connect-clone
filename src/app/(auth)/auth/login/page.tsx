import { Auth } from '@/components/screens/auth/Auth';

export default function LoginPage() {
	const random = Math.floor(Math.random() * 6) + 1;
	return <Auth pictureNumber={random} />;
}
