import { ProcessStep } from "@/types";

export default function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step) => (
        <div key={step.step} className="relative text-center">
          <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            {step.step}
          </div>
          <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
