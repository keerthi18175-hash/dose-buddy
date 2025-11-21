import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AlertCircle, Calculator } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const DoseCalculator = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [drugName, setDrugName] = useState("");
  const [dosePerKg, setDosePerKg] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateDose = () => {
    const weightNum = parseFloat(weight);
    const doseNum = parseFloat(dosePerKg);

    if (isNaN(weightNum) || isNaN(doseNum) || weightNum <= 0 || doseNum <= 0) {
      alert("Please enter valid positive numbers for weight and dose per kg");
      return;
    }

    const calculatedDose = weightNum * doseNum;
    setResult(calculatedDose);
    setShowResult(true);
  };

  const resetCalculator = () => {
    setAge("");
    setWeight("");
    setDrugName("");
    setDosePerKg("");
    setResult(null);
    setShowResult(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 border-b">
        <div className="flex items-center gap-2">
          <Calculator className="h-6 w-6 text-primary" />
          <CardTitle className="text-2xl">Drug Dose Calculator</CardTitle>
        </div>
        <CardDescription className="text-base">
          Enter patient information to calculate the appropriate drug dosage
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="age">Patient Age (years)</Label>
            <Input
              id="age"
              type="number"
              placeholder="e.g., 25"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              min="0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="weight">Body Weight (kg) *</Label>
            <Input
              id="weight"
              type="number"
              placeholder="e.g., 70"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              min="0"
              step="0.1"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="drugName">Drug Name</Label>
          <Input
            id="drugName"
            type="text"
            placeholder="e.g., Paracetamol"
            value={drugName}
            onChange={(e) => setDrugName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="dosePerKg">Standard Dose per kg (mg/kg) *</Label>
          <Input
            id="dosePerKg"
            type="number"
            placeholder="e.g., 10"
            value={dosePerKg}
            onChange={(e) => setDosePerKg(e.target.value)}
            min="0"
            step="0.01"
            required
          />
        </div>

        <div className="flex gap-3 pt-2">
          <Button onClick={calculateDose} className="flex-1" size="lg">
            <Calculator className="mr-2 h-4 w-4" />
            Calculate Dose
          </Button>
          <Button onClick={resetCalculator} variant="outline" size="lg">
            Reset
          </Button>
        </div>

        {showResult && result !== null && (
          <div className="mt-6 p-6 bg-success/10 border border-success/20 rounded-lg animate-in fade-in slide-in-from-bottom-4">
            <h3 className="text-lg font-semibold text-success mb-2">Calculated Dose</h3>
            {drugName && <p className="text-sm text-muted-foreground mb-2">Drug: {drugName}</p>}
            <p className="text-3xl font-bold text-success">
              {result.toFixed(2)} mg
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Formula: {weight} kg × {dosePerKg} mg/kg = {result.toFixed(2)} mg
            </p>
          </div>
        )}

        <Alert className="mt-4 border-warning/50 bg-warning/5">
          <AlertCircle className="h-4 w-4 text-warning" />
          <AlertDescription className="text-sm">
            <strong>Disclaimer:</strong> This tool is for educational purposes only. 
            Always consult a licensed healthcare professional before administering any medication. 
            This calculator does not replace clinical judgment.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};
