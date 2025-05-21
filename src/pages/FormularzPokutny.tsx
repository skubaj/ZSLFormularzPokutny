
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const FormularzPokutny = () => {
  const { toast } = useToast();
  const [formValues, setFormValues] = useState({
    name: "",
    class: "",
    email: "",
    subject: "",
    inquiryType: "zapytanie",
    topic: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormValues((prev) => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Formularz wysłany",
      description: "Twoje zgłoszenie zostało wysłane do nauczyciela.",
    });
    
    // Reset form after submission
    setFormValues({
      name: "",
      class: "",
      email: "",
      subject: "",
      inquiryType: "zapytanie",
      topic: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <div className="w-full max-w-3xl px-4 py-8">
        <Link to="/" className="text-[#a186f3] hover:text-[#8a6fe9] mb-4 inline-block">
          &larr; Powrót
        </Link>
        
        <div className="bg-[#a186f3] text-white p-4 rounded-t-lg">
          <h1 className="text-2xl font-semibold text-center">Formularz Pokutny</h1>
        </div>
        
        <div className="bg-[#f9f5ff] p-6 rounded-b-lg shadow-md mb-8">
          <h2 className="text-xl font-medium mb-6 text-[#333]">Zgłoszenie do nauczyciela</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="name" className="text-[#333] font-medium text-sm">
                  Imię i nazwisko ucznia <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="class" className="text-[#333] font-medium text-sm">
                  Klasa <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="class"
                  name="class"
                  value={formValues.class}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <Label htmlFor="email" className="text-[#333] font-medium text-sm">
                Email ucznia <span className="text-red-500">*</span>
              </Label>
              <p className="text-xs text-[#666] mb-1">Na ten adres otrzymasz odpowiedź od nauczyciela</p>
              <Input
                id="email"
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            
            <div className="mb-6">
              <Label htmlFor="subject" className="text-[#333] font-medium text-sm">
                Przedmiot <span className="text-red-500">*</span>
              </Label>
              <Input
                id="subject"
                name="subject"
                value={formValues.subject}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            
            <div className="mb-6">
              <Label className="text-[#333] font-medium text-sm">
                Typ zapytania <span className="text-red-500">*</span>
              </Label>
              <RadioGroup 
                value={formValues.inquiryType} 
                onValueChange={handleRadioChange}
                className="flex space-x-6 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="zapytanie" value="zapytanie" />
                  <Label htmlFor="zapytanie" className="text-[#333]">Zapytanie o zaległą pracę</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="przesylanie" value="przesylanie" />
                  <Label htmlFor="przesylanie" className="text-[#333]">Przesyłanie zaległej pracy</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="mb-6">
              <Label htmlFor="topic" className="text-[#333] font-medium text-sm">
                Temat <span className="text-red-500">*</span>
              </Label>
              <Input
                id="topic"
                name="topic"
                value={formValues.topic}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            
            <div className="mb-6">
              <Label htmlFor="message" className="text-[#333] font-medium text-sm">
                Wiadomość <span className="text-red-500">*</span>
              </Label>
              <p className="text-xs text-[#666] mb-1">Opisz szczegóły swojego zapytania (min. 10 znaków)</p>
              <Textarea
                id="message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                required
                minLength={10}
                className="mt-1 min-h-[120px]"
              />
            </div>
            
            <div className="flex justify-center mt-8">
              <Button 
                type="submit" 
                className="bg-[#a186f3] hover:bg-[#8a6fe9] text-white py-2 px-8 rounded flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                Wyślij formularz
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormularzPokutny;
