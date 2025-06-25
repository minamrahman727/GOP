import Hero from '@/components/hero';
import LeadersSection from '@/components/keyroles';
import MinistrySlider from '@/components/ministry';
import ProvinceSlider from '@/components/province';
import StatsSection from '@/components/stats';
import JudiciarySlider from '@/components/judiciary';
import SecuritySection from '@/components/security';
// (Make sure there is NO "use client" directive at the top of this file)



export default function HomePage() {
  return (
    <main className="bg-white">
      {/* Hero Banner */}
      <Hero />

      {/* President & PM */}
      <LeadersSection />

      {/* Ministries Carousel */}
      <MinistrySlider />

      {/* Provinces Carousel */}
      <ProvinceSlider />

      {/* Judiciary Slider */}
      <JudiciarySlider />

      {/* Security Forces Grid */}
      <SecuritySection />
      
      {/* National Stats */}
      <StatsSection />
    </main>
  );
}
