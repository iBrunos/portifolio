import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Github,
  Linkedin,
  MessageCircle
} from "lucide-react"
export default function Footer() {
  return (
    <>      
    <div className="flex">
        <div className="bg-black w-full ">
          <div className="justify-center align-middle ">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Contatos</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Contatos</SheetTitle>
                  <SheetDescription>
                    Links dos contatos
                  </SheetDescription>
                </SheetHeader>
                <div className="flex">
                  <div className="mr-4">
                    <Linkedin className="mr-2 h-10 w-10" />
                    <span>Linkedin</span>
                  </div>
                  <div className="mr-4">
                    <Github className="mr-4 h-10 w-10" />
                    <span>GitHub</span>
                  </div>
                  <div className="mr-4">
                    <MessageCircle className="mr-4 h-10 w-10" />
                    <span>WhatsApp</span>
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  )
}