import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getCaseStudy, getAllCaseStudies } from '@/lib/case-studies-data';
import CaseStudyTemplate from '@/components/CaseStudy/CaseStudyTemplate';
import CaseStudyExactPage from '@/components/CaseStudy/CaseStudyExactPage';
import { ACCUDEMY_EXACT_HTML } from './accudemy-exact-html';
import { SYNMEDIX_EXACT_HTML } from './synmedix-exact-html';
import { MEDSOFT_EXACT_HTML } from './medsoft-exact-html';
import { KLIBB_EXACT_HTML } from './klibb-exact-html';
import { KOHL_RECYCLING_EXACT_HTML } from './kohl-recycling-exact-html';

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {
      title: 'Case Study Not Found | Accugile Technologies',
    };
  }

  return {
    title: `${study.title} | Accugile Case Study`,
    description: study.subtitle,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;

  if (slug === 'accudemy') {
    return (
      <CaseStudyExactPage
        htmlContent={ACCUDEMY_EXACT_HTML}
        tone="#EA580C"
        toneL="#FDBA74"
      />
    );
  }

  if (slug === 'synmedix') {
    return (
      <CaseStudyExactPage
        htmlContent={SYNMEDIX_EXACT_HTML}
        tone="#7C3AED"
        toneL="#C4B5FD"
      />
    );
  }

  if (slug === 'medsoft') {
    return (
      <CaseStudyExactPage
        htmlContent={MEDSOFT_EXACT_HTML}
        tone="#2563EB"
        toneL="#93C5FD"
      />
    );
  }

  if (slug === 'klibb') {
    return (
      <CaseStudyExactPage
        htmlContent={KLIBB_EXACT_HTML}
        tone="#0E9F6E"
        toneL="#6EE7B7"
      />
    );
  }

  if (slug === 'kohl-recycling') {
    return (
      <CaseStudyExactPage
        htmlContent={KOHL_RECYCLING_EXACT_HTML}
        tone="#16A34A"
        toneL="#86EFAC"
      />
    );
  }

  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyTemplate data={study} />;
}
