
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-3xl px-4">
        <h1 className="text-4xl font-semibold text-center text-[#a186f3] mb-8">
          System Komunikacji Szkolnej
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 border border-[#e9e3ff]">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2">
              <div className="text-[#333] mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h2 className="text-2xl font-medium text-[#333]">Formularz Pokutny</h2>
            </div>
            
            <p className="text-center text-[#666] mb-4">
              Zgłaszanie zaległych prac i zapytań do nauczycieli
            </p>
          </div>
          
          <p className="text-[#333] mb-6 text-center">
            System umożliwiający uczniom złożenie zapytania do nauczyciela w sprawie zaległych prac lub 
            przesłanie zaległych zadań domowych. Formularz pozwala na przesłanie plików i załączników.
          </p>
          
          <div className="flex justify-center">
            <Link to="/formularz-pokutny">
              <Button className="bg-[#a186f3] hover:bg-[#8a6fe9] text-white py-2 px-6 rounded flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Przejdź do formularza
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <footer className="mt-8 text-center text-[#718096] text-sm">
        System komunikacji szkolnej © 2025 | Wszystkie prawa zastrzeżone
      </footer>
    </div>
  );
};

export default Index;
