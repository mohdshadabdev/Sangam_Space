
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type WelcomeDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const WelcomeDialog: React.FC<WelcomeDialogProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xs rounded-xl shadow-xl border-none bg-gradient-to-br from-[#070708] via-[#181828] to-[#33257e] text-white animate-fade-in">
        <DialogHeader>
          <DialogTitle className="text-4xl font-heading text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 text-center mb-2">
            नमस्ते 👋
          </DialogTitle>
          <DialogDescription className="text-base text-center mt-2 text-white/80">
            Welcome to <span className="font-bold text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">Sangam Space</span> — Prayagraj’s Hub for College & Tech Events!
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 text-white hover:scale-105 transition-transform shadow-lg rounded-lg font-bold hover:brightness-110">
              Continue
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeDialog;
