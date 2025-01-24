import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
const GithubPage = () => {
  const { toast } = useToast();
  const handleConnect = () => {
    toast({
      title: "Coming Soon",
      description: "GitHub integration will be implemented in the next update.",
    });
  };
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">GitHub Integration</h1>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Connect to GitHub</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Connect your GitHub repository to sync inventory data and track changes.
              </p>
              <Button onClick={handleConnect}>
                <Github className="mr-2 h-4 w-4" />
                Connect GitHub
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default GithubPage;
