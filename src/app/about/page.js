
import AboutPage from '@/components/AboutPage';
import { aboutContent } from '@/data/aboutContent';

export const metadata = {
    title: 'About | Vilesh',
    description: 'Learn who we are and what drives us.',
};

export default function About() {
    return <AboutPage data={aboutContent} />;
}
