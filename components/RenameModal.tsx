"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface RenameModalProps {
  title: string;
  onClose: () => void;
  onSave: (newTitle: string) => void;
}

export default function RenameModal({
  title,
  onClose,
  onSave,
}: RenameModalProps) {
  const [newTitle, setNewTitle] = useState(title);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTitle.trim()) {
      onSave(newTitle);
    }
  };
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit card title</DialogTitle>
        </DialogHeader>
        <DialogDescription>Enter a new title for this card</DialogDescription>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            required
            maxLength={30}
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Card title"
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
