import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Shield, Target } from "lucide-react";

export const AboutSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12 space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <CardTitle>About This Calculator</CardTitle>
          </div>
          <CardDescription>Understanding drug dose calculations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            This Drug Dose Calculator is designed as an educational tool to help students and healthcare 
            professionals understand the fundamentals of dose calculations based on body weight.
          </p>
          
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-1">How It Works</h4>
                <p className="text-sm text-muted-foreground">
                  The calculator uses the formula: Final Dose (mg) = Body Weight (kg) × Dose per kg (mg/kg)
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Safety First</h4>
                <p className="text-sm text-muted-foreground">
                  Always verify calculations with qualified medical professionals before administration
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Important Notice
          </h3>
          <p className="text-sm text-muted-foreground">
            This is a mini project created for educational purposes. It demonstrates basic drug dosage 
            calculation principles but should never be used for actual clinical decisions. Always consult 
            appropriate medical resources, formularies, and healthcare professionals for accurate dosing 
            information in real-world scenarios.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
