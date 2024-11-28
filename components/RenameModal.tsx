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
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRenameModal } from "@/contexts/RenameModalContext";

export default function RenameModal() {
  const { initialValues, isOpen, onClose } = useRenameModal();
  const [title, setTitle] = useState(initialValues.title);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setTitle(initialValues.title);
  }, [initialValues]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onClose();
    } catch (error) {
      console.error("Failed to save:", error);
    } finally {
      setPending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit card title</DialogTitle>
        </DialogHeader>
        <DialogDescription>Enter a new title for this card</DialogDescription>
        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            disabled={pending}
            required
            maxLength={60}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Card title"
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={pending} type="submit">
              {pending ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
