export default function HowItWorks() {
    const steps = [
      {
        id: 1,
        title: "Sign Up",
        description: "Create your account and set your language learning goals."
      },
      {
        id: 2,
        title: "Choose a Topic",
        description: "Select from various conversation scenarios based on your interests."
      },
      {
        id: 3,
        title: "Practice Speaking",
        description: "Engage in natural conversations with our AI language partners."
      },
      {
        id: 4,
        title: "Receive Feedback",
        description: "Get personalized feedback and suggestions to improve your speaking skills."
      }
    ];
  
    return (
      <div className="bg-gray-100 p-8">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Step {step.id}: {step.title}</h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }