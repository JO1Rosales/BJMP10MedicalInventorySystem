import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
const SettingsPage = () => {
  const { toast } = useToast();
  const handleSave = () => {
    toast({
      title: "Coming Soon",
      description: "Settings functionality will be implemented in the next update.",
    });
  };
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Configure your inventory management settings.
              </p>
              <Button onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Save Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default SettingsPage;
