import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input";



export default function Home() {
  return (
      <div className="flex flex-row">
        <div className="basis-1/2 p-4 m-4 bg-slate-100">
          <h2 className="text-xl font-semibold">Parameters</h2>
          <p className="text-sm text-slate-700 mb-4">Customization of the thumbnail</p>
          <Input type="url"/>
        </div>
        <div className="basis-1/2 p-4 m-4 bg-slate-100"></div>
      </div>
  );
}
