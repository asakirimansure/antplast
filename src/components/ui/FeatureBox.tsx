import { Feature } from "@/types";

export default function FeatureBox({ feature }: { feature: Feature }) {
  return (
    <div className="text-center p-6">
      <div className="text-5xl mb-4">{feature.icon}</div>
      <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
    </div>
  );
}
