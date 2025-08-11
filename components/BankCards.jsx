import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const BankCard = ({ name, description, icon: Icon, color }) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white border-gray-200">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
            style={{ backgroundColor: color }}
          >
            {Icon && <Icon className="w-6 h-6 text-white" />}
          </div>
          <div className="text-left">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
              {name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 border-t pt-4 border-gray-100">
          <span className="text-sm font-medium text-gray-600">
            View Template
          </span>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1"
            style={{ backgroundColor: `${color}20`, color: color }}
          >
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BankCard;