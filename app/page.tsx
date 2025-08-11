import { Button } from "@/components/ui/button";
import BankCard from "@/components/BankCards";
import Navbar from "@/components/Navbar";
import {
  ShieldCheck,
  FileText,
  Pencil,
  CreditCard,
  Banknote,
  Landmark,
  Globe,
  Wallet,
  Building,
  BarChart2,
  Store,
  DollarSign,

} from "lucide-react";

const banks = [
  {
    name: "Chase Bank",
    description: "Professional statement templates",
    icon: CreditCard,
    color: "#1e40af",
  },
  {
    name: "Bank of America",
    description: "Detailed transaction formats",
    icon: Landmark,
    color: "#dc2626",
  },
  {
    name: "Wells Fargo",
    description: "Standard banking layouts",
    icon: Banknote,
    color: "#ca8a04",
  },
  {
    name: "Citibank",
    description: "International statement styles",
    icon: Globe,
    color: "#0891b2",
  },
  {
    name: "Capital One",
    description: "Modern template designs",
    icon: Wallet,
    color: "#f57c00",
  },
  {
    name: "TD Bank",
    description: "Clean statement formats",
    icon: Building,
    color: "#059669",
  },
  {
    name: "PNC Bank",
    description: "Business-ready templates",
    icon: BarChart2,
    color: "#7c3aed",
  },
  {
    name: "US Bank",
    description: "Customizable layouts",
    icon: Store,
    color: "#e11d48",
  },
  {
    name: "HSBC",
    description: "Global standard formats",
    icon: DollarSign,
    color: "#dc2626",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 py-24 md:py-32 px-4">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tighter">
            <span className="block">Professional Bank Statement</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700">
              Templates for Statements
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Access a curated collection of authentic, professionally designed
            bank statement templates from top financial institutions. Perfect
            for developers, designers, and educators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl px-8 py-3 rounded-full"
            >
              Explore Templates
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-600 font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:-translate-y-1 px-8 py-3 rounded-full"
            >
              View Samples
            </Button>
          </div>
        </div>

      </section>

      {/* Banks Grid Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Templates from Leading Banks
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download professionally crafted statement templates from a variety
              of major financial institutions, ready for your projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {banks.map((bank, index) => (
              <BankCard
                key={index}
                name={bank.name}
                description={bank.description}
                icon={bank.icon}
                color={bank.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
            Why Choose Our Templates?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Authenticity & Accuracy
              </h3>
              <p className="text-gray-600">
                Our templates are meticulously designed to mirror real-world
                bank statement layouts and data structures.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Multiple Formats
              </h3>
              <p className="text-gray-600">
                Templates are available in versatile formats like PDF, Word, and
                Excel for seamless integration into any workflow.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Pencil className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Effortless Customization
              </h3>
              <p className="text-gray-600">
                Each template includes placeholder data, making it incredibly
                easy to customize with your own details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Enhance Your Projects?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of developers and professionals who trust our
              templates for their demonstrations, learning, and app development.
            </p>
            <Button
              size="lg"
              className="bg-white text-indigo-700 shadow-md hover:bg-gray-100 transition-all duration-300 font-semibold px-12 py-3 rounded-full"
            >
              Browse All Templates
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
