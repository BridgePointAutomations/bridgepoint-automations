import { AlertCircle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const UrgencyBanner = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-4">
      <div className="container mx-auto flex items-center justify-center gap-3 flex-wrap text-center">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 animate-pulse" />
          <span className="font-semibold text-sm md:text-base">
            Limited Availability:
          </span>
        </div>
        <span className="text-sm md:text-base">
          Only 3 consultation spots left this month for Pittsburgh businesses
        </span>
        <Badge variant="secondary" className="bg-white text-red-600 font-semibold">
          Book Now
        </Badge>
      </div>
    </div>
  );
};

export default UrgencyBanner;
