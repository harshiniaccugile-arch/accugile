import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#FFFFFF', paddingBottom: '60px' }}>
      {/* Top Utility Bar Skeleton */}
      <div style={{ background: '#F3F5FB', borderBottom: '1px solid #E5E8EF', padding: '12px 0' }}>
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Skeleton style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#CBD5E1' }} />
            <Skeleton style={{ width: '280px', height: '14px', borderRadius: '4px', backgroundColor: '#CBD5E1' }} />
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Skeleton style={{ width: '60px', height: '14px', borderRadius: '4px', backgroundColor: '#CBD5E1' }} />
            <Skeleton style={{ width: '120px', height: '14px', borderRadius: '4px', backgroundColor: '#CBD5E1' }} />
            <Skeleton style={{ width: '100px', height: '14px', borderRadius: '4px', backgroundColor: '#CBD5E1' }} />
          </div>
        </div>
      </div>

      {/* Main Header / Navbar Skeleton */}
      <div style={{ borderBottom: '1px solid #E5E8EF', padding: '16px 0', background: '#FFFFFF' }}>
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Skeleton style={{ width: '150px', height: '40px', borderRadius: '8px', backgroundColor: '#CBD5E1' }} />
          <div style={{ display: 'flex', gap: '24px' }}>
            <Skeleton style={{ width: '40px', height: '16px', borderRadius: '4px', backgroundColor: '#CBD5E1' }} />
            <Skeleton style={{ width: '65px', height: '16px', borderRadius: '4px', backgroundColor: '#CBD5E1' }} />
            <Skeleton style={{ width: '80px', height: '16px', borderRadius: '4px', backgroundColor: '#CBD5E1' }} />
            <Skeleton style={{ width: '70px', height: '16px', borderRadius: '4px', backgroundColor: '#CBD5E1' }} />
            <Skeleton style={{ width: '90px', height: '16px', borderRadius: '4px', backgroundColor: '#CBD5E1' }} />
            <Skeleton style={{ width: '70px', height: '16px', borderRadius: '4px', backgroundColor: '#CBD5E1' }} />
          </div>
          <Skeleton style={{ width: '110px', height: '40px', borderRadius: '8px', backgroundColor: '#CBD5E1' }} />
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="wrap" style={{ paddingTop: '56px', paddingBottom: '56px' }}>
        <div style={{ maxWidth: '820px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <Skeleton style={{ width: '120px', height: '22px', borderRadius: '20px', backgroundColor: '#E2E8F0' }} />
          <Skeleton style={{ width: '92%', height: '52px', borderRadius: '8px', backgroundColor: '#CBD5E1' }} />
          <Skeleton style={{ width: '75%', height: '52px', borderRadius: '8px', backgroundColor: '#CBD5E1' }} />
          <Skeleton style={{ width: '85%', height: '20px', borderRadius: '6px', marginTop: '8px', backgroundColor: '#E2E8F0' }} />
          <Skeleton style={{ width: '65%', height: '20px', borderRadius: '6px', backgroundColor: '#E2E8F0' }} />

          <div style={{ display: 'flex', gap: '14px', marginTop: '16px' }}>
            <Skeleton style={{ width: '160px', height: '48px', borderRadius: '10px', backgroundColor: '#CBD5E1' }} />
            <Skeleton style={{ width: '140px', height: '48px', borderRadius: '10px', backgroundColor: '#E2E8F0' }} />
          </div>
        </div>

        {/* Content Cards Grid Skeleton */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '56px' }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{ border: '1px solid #E2E8F0', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px', backgroundColor: '#F8FAFC' }}>
              <Skeleton style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#CBD5E1' }} />
              <Skeleton style={{ width: '60%', height: '22px', borderRadius: '6px', backgroundColor: '#CBD5E1' }} />
              <Skeleton style={{ width: '100%', height: '14px', borderRadius: '4px', backgroundColor: '#E2E8F0' }} />
              <Skeleton style={{ width: '90%', height: '14px', borderRadius: '4px', backgroundColor: '#E2E8F0' }} />
              <Skeleton style={{ width: '40%', height: '16px', borderRadius: '4px', marginTop: '6px', backgroundColor: '#CBD5E1' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
