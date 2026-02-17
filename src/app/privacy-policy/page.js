
import LegalPage from '@/components/LegalPage';
import { legalContent } from '@/data/legalContent';

export const metadata = {
    title: 'Privacy Policy | Vilesh',
    description: 'How we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
    return <LegalPage data={legalContent.privacy} />;
}
