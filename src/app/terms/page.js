
import LegalPage from '@/components/LegalPage';
import { legalContent } from '@/data/legalContent';

export const metadata = {
    title: 'Terms of Service | Vilesh',
    description: 'The rules and regulations for the use of our website.',
};

export default function TermsPage() {
    return <LegalPage data={legalContent.terms} />;
}
