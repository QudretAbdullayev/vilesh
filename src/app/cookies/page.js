
import LegalPage from '@/components/LegalPage';
import { legalContent } from '@/data/legalContent';

export const metadata = {
    title: 'Cookie Policy | Vilesh',
    description: 'Learn about how we use cookies to improve your experience.',
};

export default function CookiesPage() {
    return <LegalPage data={legalContent.cookies} />;
}
