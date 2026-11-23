import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getCaseStudy, getAllCaseStudies } from '@/lib/case-studies-data';
import { CASE_STUDIES_META } from '@/lib/case-studies-meta';
import CaseStudyTemplate from '@/components/CaseStudy/CaseStudyTemplate';
import CaseStudyExactPage from '@/components/CaseStudy/CaseStudyExactPage';
import { ACCUDEMY_EXACT_HTML } from './accudemy-exact-html';
import { SYNMEDIX_EXACT_HTML } from './synmedix-exact-html';
import { MEDSOFT_EXACT_HTML } from './medsoft-exact-html';
import { KLIBB_EXACT_HTML } from './klibb-exact-html';
import { KOHL_RECYCLING_EXACT_HTML } from './kohl-recycling-exact-html';
import { AEGEAN_ESCAPES_EXACT_HTML } from './aegean-escapes-exact-html';
import { AARHUS_CLOUDWORKS_EXACT_HTML } from './aarhus-cloudworks-exact-html';
import { AMMAN_FIXERS_EXACT_HTML } from './amman-fixers-exact-html';
import { ANDES_DATA_LABS_EXACT_HTML } from './andes-data-labs-exact-html';
import { ANDINA_PAY_EXACT_HTML } from './andina-pay-exact-html';
import { BALTIC_PULSE_ANALYTICS_EXACT_HTML } from './baltic-pulse-analytics-exact-html';
import { CASCADIA_CLOUD_SERVICES_EXACT_HTML } from './cascadia-cloud-services-exact-html';
import { BOTTEGA_OLIVIA_EXACT_HTML } from './bottega-olivia-exact-html';
import { BRABANT_FORMATION_EXACT_HTML } from './brabant-formation-exact-html';
import { BROOKLYN_BEAN_ROASTERS_EXACT_HTML } from './brooklyn-bean-roasters-exact-html';
import { DECCAN_TEXTILES_EXACT_HTML } from './deccan-textiles-exact-html';
import { FJELLKRAFT_ENERGI_EXACT_HTML } from './fjellkraft-energi-exact-html';
import { GUJARAT_AGRO_DISTRIBUTORS_EXACT_HTML } from './gujarat-agro-distributors-exact-html';
import { HANBIT_SKIN_LAB_EXACT_HTML } from './hanbit-skin-lab-exact-html';
import { ISAR_INDUSTRIAL_INSIGHTS_EXACT_HTML } from './isar-industrial-insights-exact-html';
import { HANSEATISCH_HANDWERK_EXACT_HTML } from './hanseatisch-handwerk-exact-html';
import { KANSAI_PRECISION_EXACT_HTML } from './kansai-precision-exact-html';
import { KINTA_HEALTHCARE_SUPPLIES_EXACT_HTML } from './kinta-healthcare-supplies-exact-html';
import { LAKESHORE_ADVISORY_EXACT_HTML } from './lakeshore-advisory-exact-html';
import { LIMMAT_VERMOEGENSVERWALTUNG_EXACT_HTML } from './limmat-vermoegensverwaltung-exact-html';
import { LONESTAR_SUBSCRIBE_EXACT_HTML } from './lonestar-subscribe-exact-html';
import { MALNAD_COFFEE_COLLECTIVE_EXACT_HTML } from './malnad-coffee-collective-exact-html';
import { MARINA_GATE_TECHNOLOGIES_EXACT_HTML } from './marina-gate-technologies-exact-html';
import { MILE_HIGH_MAKERS_STUDIO_EXACT_HTML } from './mile-high-makers-studio-exact-html';
import { NAJD_HOME_LIVING_EXACT_HTML } from './najd-home-living-exact-html';
import { NORDIC_FLEET_SOLUTIONS_EXACT_HTML } from './nordic-fleet-solutions-exact-html';
import { OCCIDENTE_PLASTICOS_EXACT_HTML } from './occidente-plasticos-exact-html';
import { PENNINE_FREIGHT_EXACT_HTML } from './pennine-freight-exact-html';
import { PORTO_AZUL_HOSPITALITY_EXACT_HTML } from './porto-azul-hospitality-exact-html';
import { RIVIERE_LOGISTIQUE_EXACT_HTML } from './riviere-logistique-exact-html';
import { ROSHNI_LEARNING_ACADEMY_EXACT_HTML } from './roshni-learning-academy-exact-html';
import { SAHYADRI_SKILL_ACADEMY_EXACT_HTML } from './sahyadri-skill-academy-exact-html';
import { SAI_GON_SACH_EXACT_HTML } from './sai-gon-sach-exact-html';
import { SAZON_SEMANAL_EXACT_HTML } from './sazon-semanal-exact-html';
import { SECONDE_VIE_MODE_EXACT_HTML } from './seconde-vie-mode-exact-html';
import { SHANNON_VALLEY_TRAINING_EXACT_HTML } from './shannon-valley-training-exact-html';
import { SHINAGAWA_MOBILITY_SYSTEMS_EXACT_HTML } from './shinagawa-mobility-systems-exact-html';
import { SOUTHERN_OUTDOOR_SUPPLY_EXACT_HTML } from './southern-outdoor-supply-exact-html';
import { TASMAN_PROPERTY_GROUP_EXACT_HTML } from './tasman-property-group-exact-html';
import { TEJO_CAPITAL_PARTNERS_EXACT_HTML } from './tejo-capital-partners-exact-html';
import { THISTLE_HEALTH_TECHNOLOGIES_EXACT_HTML } from './thistle-health-technologies-exact-html';
import { THRIFTLINE_MARKET_EXACT_HTML } from './thriftline-market-exact-html';
import { TIDEWATER_SOCIAL_EXACT_HTML } from './tidewater-social-exact-html';
import { VECHTSTREEK_VERZEKERINGEN_EXACT_HTML } from './vechtstreek-verzekeringen-exact-html';
import { VERDE_CASA_DECOR_EXACT_HTML } from './verde-casa-decor-exact-html';




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
  const meta = CASE_STUDIES_META[slug];

  const title = meta?.title || study?.title;
  const description = meta?.description || study?.subtitle;

  if (!title) {
    return {
      title: 'Case Study Not Found | Accugile Technologies',
    };
  }

  return {
    title: `${title} | Accugile Case Study`,
    description: description || `${title} - Accugile Case Study`,
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

  if (slug === 'aegean-escapes') {
    return (
      <CaseStudyExactPage
        htmlContent={AEGEAN_ESCAPES_EXACT_HTML}
        tone="#0284C7"
        toneL="#7DD3FC"
      />
    );
  }

  if (slug === 'aarhus-cloudworks') {
    return (
      <CaseStudyExactPage
        htmlContent={AARHUS_CLOUDWORKS_EXACT_HTML}
        tone="#0891B2"
        toneL="#67E8F9"
      />
    );
  }

  if (slug === 'amman-fixers') {
    return (
      <CaseStudyExactPage
        htmlContent={AMMAN_FIXERS_EXACT_HTML}
        tone="#EA580C"
        toneL="#FDBA74"
      />
    );
  }

  if (slug === 'andes-data-labs') {
    return (
      <CaseStudyExactPage
        htmlContent={ANDES_DATA_LABS_EXACT_HTML}
        tone="#EA580C"
        toneL="#FDBA74"
      />
    );
  }

  if (slug === 'andina-pay') {
    return (
      <CaseStudyExactPage
        htmlContent={ANDINA_PAY_EXACT_HTML}
        tone="#6D28D9"
        toneL="#C4B5FD"
      />
    );
  }

  if (slug === 'baltic-pulse-analytics') {
    return (
      <CaseStudyExactPage
        htmlContent={BALTIC_PULSE_ANALYTICS_EXACT_HTML}
        tone="#4F46E5"
        toneL="#A5B4FC"
      />
    );
  }

  if (slug === 'bottega-olivia') {
    return (
      <CaseStudyExactPage
        htmlContent={BOTTEGA_OLIVIA_EXACT_HTML}
        tone="#4D7C0F"
        toneL="#BEF264"
      />
    );
  }

  if (slug === 'baltic-pulse-analytics') {
    return (
      <CaseStudyExactPage
        htmlContent={BALTIC_PULSE_ANALYTICS_EXACT_HTML}
        tone="#4F46E5"
        toneL="#A5B4FC"
      />
    );
  }

  if (slug === 'brabant-formation') {
    return (
      <CaseStudyExactPage
        htmlContent={BRABANT_FORMATION_EXACT_HTML}
        tone="#1D4ED8"
        toneL="#93C5FD"
      />
    );
  }

  if (slug === 'brooklyn-bean-roasters') {
    return (
      <CaseStudyExactPage
        htmlContent={BROOKLYN_BEAN_ROASTERS_EXACT_HTML}
        tone="#92400E"
        toneL="#FDBA74"
      />
    );
  }

  if (slug === 'cascadia-cloud-services') {
    return (
      <CaseStudyExactPage
        htmlContent={CASCADIA_CLOUD_SERVICES_EXACT_HTML}
        tone="#0369A1"
        toneL="#7DD3FC"
      />
    );
  }

  if (slug === 'deccan-textiles') {
    return (
      <CaseStudyExactPage
        htmlContent={DECCAN_TEXTILES_EXACT_HTML}
        tone="#9333EA"
        toneL="#D8B4FE"
      />
    );
  }

  if (slug === 'fjellkraft-energi') {
    return (
      <CaseStudyExactPage
        htmlContent={FJELLKRAFT_ENERGI_EXACT_HTML}
        tone="#0369A1"
        toneL="#7DD3FC"
      />
    );
  }

  if (slug === 'gujarat-agro-distributors') {
    return (
      <CaseStudyExactPage
        htmlContent={GUJARAT_AGRO_DISTRIBUTORS_EXACT_HTML}
        tone="#15803D"
        toneL="#86EFAC"
      />
    );
  }

  if (slug === 'hanbit-skin-lab') {
    return (
      <CaseStudyExactPage
        htmlContent={HANBIT_SKIN_LAB_EXACT_HTML}
        tone="#15803D"
        toneL="#86EFAC"
      />
    );
  }

  if (slug === 'gujarat-agro-distributors') {
    return (
      <CaseStudyExactPage
        htmlContent={GUJARAT_AGRO_DISTRIBUTORS_EXACT_HTML}
        tone="#15803D"
        toneL="#86EFAC"
      />
    );
  }

  if (slug === 'isar-industrial-insights') {
    return (
      <CaseStudyExactPage
        htmlContent={ISAR_INDUSTRIAL_INSIGHTS_EXACT_HTML}
        tone="#7C3AED"
        toneL="#C4B5FD"
      />
    );
  }

  if (slug === 'hanseatisch-handwerk') {
    return (
      <CaseStudyExactPage
        htmlContent={HANSEATISCH_HANDWERK_EXACT_HTML}
        tone="#1E40AF"
        toneL="#93C5FD"
      />
    );
  }

  if (slug === 'kansai-precision') {
    return (
      <CaseStudyExactPage
        htmlContent={KANSAI_PRECISION_EXACT_HTML}
        tone="#BE123C"
        toneL="#FDA4AF"
      />
    );
  }

  if (slug === 'kinta-healthcare-supplies') {
    return (
      <CaseStudyExactPage
        htmlContent={KINTA_HEALTHCARE_SUPPLIES_EXACT_HTML}
        tone="#0D9488"
        toneL="#99F6E4"
      />
    );
  }

  if (slug === 'lakeshore-advisory') {
    return (
      <CaseStudyExactPage
        htmlContent={LAKESHORE_ADVISORY_EXACT_HTML}
        tone="#1D4ED8"
        toneL="#93C5FD"
      />
    );
  }

  // ...inside CaseStudyPage, alongside the other slug checks:
  if (slug === 'limmat-vermoegensverwaltung') {
    return (
      <CaseStudyExactPage
        htmlContent={LIMMAT_VERMOEGENSVERWALTUNG_EXACT_HTML}
        tone="#1E3A8A"
        toneL="#BFDBFE"
      />
    );
  }

  if (slug === 'lonestar-subscribe') {
    return (
      <CaseStudyExactPage
        htmlContent={LONESTAR_SUBSCRIBE_EXACT_HTML}
        tone="#C2410C"
        toneL="#FDBA74"
      />
    );
  }

  if (slug === 'malnad-coffee-collective') {
    return (
      <CaseStudyExactPage
        htmlContent={MALNAD_COFFEE_COLLECTIVE_EXACT_HTML}
        tone="#92400E"
        toneL="#FDBA74"
      />
    );
  }

  if (slug === 'marina-gate-technologies') {
    return (
      <CaseStudyExactPage
        htmlContent={MARINA_GATE_TECHNOLOGIES_EXACT_HTML}
        tone="#B45309"
        toneL="#FCD34D"
      />
    );
  }

  if (slug === 'mile-high-makers-studio') {
    return (
      <CaseStudyExactPage
        htmlContent={MILE_HIGH_MAKERS_STUDIO_EXACT_HTML}
        tone="#9333EA"
        toneL="#D8B4FE"
      />
    );
  }

  if (slug === 'najd-home-living') {
    return (
      <CaseStudyExactPage
        htmlContent={NAJD_HOME_LIVING_EXACT_HTML}
        tone="#B45309"
        toneL="#FCD34D"
      />
    );
  }

  if (slug === 'nordic-fleet-solutions') {
    return (
      <CaseStudyExactPage
        htmlContent={NORDIC_FLEET_SOLUTIONS_EXACT_HTML}
        tone="#0E7490"
        toneL="#67E8F9"
      />
    );
  }

  if (slug === 'occidente-plasticos') {
    return (
      <CaseStudyExactPage
        htmlContent={OCCIDENTE_PLASTICOS_EXACT_HTML}
        tone="#0F766E"
        toneL="#5EEAD4"
      />
    );
  }


  if (slug === 'pennine-freight') {
    return (
      <CaseStudyExactPage
        htmlContent={PENNINE_FREIGHT_EXACT_HTML}
        tone="#B91C1C"
        toneL="#FCA5A5"
      />
    );
  }

  if (slug === 'porto-azul-hospitality') {
    return (
      <CaseStudyExactPage
        htmlContent={PORTO_AZUL_HOSPITALITY_EXACT_HTML}
        tone="#0284C7"
        toneL="#7DD3FC"
      />
    );
  }

  if (slug === 'riviere-logistique') {
    return (
      <CaseStudyExactPage
        htmlContent={RIVIERE_LOGISTIQUE_EXACT_HTML}
        tone="#0369A1"
        toneL="#7DD3FC"
      />
    );
  }

  if (slug === 'roshni-learning-academy') {
    return (
      <CaseStudyExactPage
        htmlContent={ROSHNI_LEARNING_ACADEMY_EXACT_HTML}
        tone="#D97706"
        toneL="#FCD34D"
      />
    );
  }

  if (slug === 'sahyadri-skill-academy') {
    return (
      <CaseStudyExactPage
        htmlContent={SAHYADRI_SKILL_ACADEMY_EXACT_HTML}
        tone="#15803D"
        toneL="#86EFAC"
      />
    );
  }

  if (slug === 'sai-gon-sach') {
    return (
      <CaseStudyExactPage
        htmlContent={SAI_GON_SACH_EXACT_HTML}
        tone="#059669"
        toneL="#6EE7B7"
      />
    );
  }

  if (slug === 'sazon-semanal') {
    return (
      <CaseStudyExactPage
        htmlContent={SAZON_SEMANAL_EXACT_HTML}
        tone="#DC2626"
        toneL="#FCA5A5"
      />
    );
  }

  if (slug === 'seconde-vie-mode') {
    return (
      <CaseStudyExactPage
        htmlContent={SECONDE_VIE_MODE_EXACT_HTML}
        tone="#DB2777"
        toneL="#F9A8D4"
      />
    );
  }

  if (slug === 'shannon-valley-training') {
    return (
      <CaseStudyExactPage
        htmlContent={SHANNON_VALLEY_TRAINING_EXACT_HTML}
        tone="#0F766E"
        toneL="#5EEAD4"
      />
    );
  }

  if (slug === 'shinagawa-mobility-systems') {
    return (
      <CaseStudyExactPage
        htmlContent={SHINAGAWA_MOBILITY_SYSTEMS_EXACT_HTML}
        tone="#BE123C"
        toneL="#FDA4AF"
      />
    );
  }

  if (slug === 'southern-outdoor-supply') {
    return (
      <CaseStudyExactPage
        htmlContent={SOUTHERN_OUTDOOR_SUPPLY_EXACT_HTML}
        tone="#65A30D"
        toneL="#BEF264"
      />
    );
  }

  if (slug === 'tasman-property-group') {
    return (
      <CaseStudyExactPage
        htmlContent={TASMAN_PROPERTY_GROUP_EXACT_HTML}
        tone="#334155"
        toneL="#CBD5E1"
      />
    );
  }

  if (slug === 'tejo-capital-partners') {
    return (
      <CaseStudyExactPage
        htmlContent={TEJO_CAPITAL_PARTNERS_EXACT_HTML}
        tone="#B45309"
        toneL="#FCD34D"
      />
    );
  }

  if (slug === 'thistle-health-technologies') {
    return (
      <CaseStudyExactPage
        htmlContent={THISTLE_HEALTH_TECHNOLOGIES_EXACT_HTML}
        tone="#7C3AED"
        toneL="#C4B5FD"
      />
    );
  }

  if (slug === 'thriftline-market') {
    return (
      <CaseStudyExactPage
        htmlContent={THRIFTLINE_MARKET_EXACT_HTML}
        tone="#C026D3"
        toneL="#F0ABFC"
      />
    );
  }

  if (slug === 'tidewater-social') {
    return (
      <CaseStudyExactPage
        htmlContent={TIDEWATER_SOCIAL_EXACT_HTML}
        tone="#0891B2"
        toneL="#67E8F9"
      />
    );
  }

  if (slug === 'vechtstreek-verzekeringen') {
    return (
      <CaseStudyExactPage
        htmlContent={VECHTSTREEK_VERZEKERINGEN_EXACT_HTML}
        tone="#EA580C"
        toneL="#FDBA74"
      />
    );
  }

  if (slug === 'verde-casa-decor') {
    return (
      <CaseStudyExactPage
        htmlContent={VERDE_CASA_DECOR_EXACT_HTML}
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
