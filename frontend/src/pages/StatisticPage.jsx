// src/pages/StatisticPage.jsx
import BottomNavBar from "../components/BottomNavBar";

export default function StatisticPage() {
  return (
    <div className="min-h-screen relative bg-gray-800">
        <div className="w-full max-w-md space-y-8 bg-[#FDFDFD] p-6 mx-auto h-screen pb-10">
          <h1 className="text-xl font-semibold text-gray-800 mb-4">Statistic</h1>
            {/* Konten sementara */}
            <div className="bg-white rounded-xl shadow p-6 text-center text-gray-500">
                <p>Halaman Statistik masih dalam pengembangan.</p>
            </div>

        </div>


      <BottomNavBar />
    </div>
  );
}
