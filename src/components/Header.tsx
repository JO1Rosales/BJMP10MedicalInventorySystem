import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const Header = () => {
  const { toast } = useToast();

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-medical-blue">MedInventory</h1>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              toast({
                title: "No new notifications",
                description: "You're all caught up!",
              });
            }}
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="outline">Sign Out</Button>
        </div>
      </div>
    </header>
  );
};
