import { useEffect } from "react"

export default function Comedy(props) {

    useEffect(() => {
      const script = document.createElement('script');
    
      script.src = "https://w.behold.so/widget.js";
      script.async = true;
    
      document.body.appendChild(script);

    }, []);

    return (
        <div className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-4 sm:py-12 lg:max-w-none lg:py-8">
            <h2 className="text-4xl mb-4 sm:pb-16 max-sm:pb-12 text-center font-bold text-white">Comedy</h2>

              <figure data-behold-id="Vjg54WUZVz6s5IsfRhxB"></figure>
            </div>
        </div>
      </div>
    )
}