import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";

export function NavDrawer() {
  return (
    <Sheet>
      <SheetTrigger>Menu</SheetTrigger>
      <SheetContent className="bg-green-700 text-green-50">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
            <ul className="text-green-50 font-['Verdana'] text-xl flex flex-col gap-4">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/tags/recipes">Recipes</a>
              </li>
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
