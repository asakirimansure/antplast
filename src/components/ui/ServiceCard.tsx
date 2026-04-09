import { Service } from "@/types";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="font-bold text-lg text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
    </div>
  );
}
