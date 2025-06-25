import Ministry from '@/components/govt/ministry';
import Provinces from '@/components/govt/province';
import Departments from '@/components/govt/depart';

export default function GovernmentPage() {
  return (
    <main className="py-10 px-4 w-full mx-auto bg-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-800">Government of Pakistan</h1>
      
      <Ministry />
      <Provinces />
      <Departments />
    </main>
  );
}
