import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function Benefit() {
  const features = [
    {
      title: "Materi Berkualitas Tinggi",
      description: "Kelas Dicoding gratis (Jalur Dasar → Pemula → Lanjutan).",
      icon: <IconTerminal2 />,
    },
    {
      title: "Sertifikat resmi",
      description:
        "Sertifikat resmi dari Dicoding bagi peserta yang menyelesaikan kursus.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Pembelajaran Gratis",
      description:
        "Akses ke semua materi pembelajaran tanpa biaya, sepenuhnya gratis.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Kurikulum Terstruktur",
      description:
        "Kurikulum yang dirancang oleh para ahli industri dengan jelas dan terukur.",
      icon: <IconCloud />,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Benefit Kontributor
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Dapatkan keuntungan eksklusif dengan bergabung bersama komunitas pembelajar kami
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div>
      <div
        className={cn(
          "flex flex-col lg:border-r py-10 relative group/feature border-gray-200",
          (index === 0 || index === 4) && "lg:border-l border-gray-200",
          index < 4 && "lg:border-b border-gray-200"
        )}
      >
        {index < 4 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-green-50 to-transparent pointer-events-none" />
        )}
        {index >= 4 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-green-50 to-transparent pointer-events-none" />
        )}
        <div className="mb-4 relative z-10 px-10 text-green-600">{icon}</div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 group-hover/feature:bg-green-500 transition-all duration-200 origin-center" />
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-900">
            {title}
          </span>
        </div>
        <p className="text-sm text-gray-600 max-w-xs relative z-10 px-10">
          {description}
        </p>
      </div>
    </div>
  );
};
