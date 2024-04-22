import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



export default function Home() {
  return (
      <div className="flex flex-row">
        <Card className="w-[350px] m-4">
          <CardHeader>
            <CardTitle>Get Your Thumbnail</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input id="url" type="url" placeholder="Add your YouTube URL"/>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button>Deploy</Button>
          </CardFooter>
        </Card>

        <Card className="m-4 basis-2/3 p-4 bg-slate-100">
          <div className="p-4 border rounded-lg border-slate-200 bg-white">
            <img className="rounded-md mb-2" src="https://img.youtube.com/vi/b_ANHgTHNSI/maxresdefault.jpg"></img>
            <div className="flex flex-row">
              <img className="w-8 h-8 rounded-full mr-2" src="https://img.youtube.com/vi/b_ANHgTHNSI/maxresdefault.jpg"></img>
              <p className="text-sm font-medium">This is a title</p>
            </div>
            
          </div>

        </Card> 

      </div>
  );
}
