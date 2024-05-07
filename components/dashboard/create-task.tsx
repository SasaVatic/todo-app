"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function CreateTask() {
  const [showCard, setShowCard] = useState<boolean>(false);

  function handleClick() {
    setShowCard(!showCard);
  }

  return (
    <>
      {showCard && (
        <Card className="max-w-[350px] w-full">
          <CardHeader>
            <CardTitle>Create Task</CardTitle>
            <CardDescription>Create your new task in one-click</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Name of your task" required />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="chore">Chore</Label>
                  <Textarea
                    id="chore"
                    placeholder="Type your chore here."
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleClick}>
              Cancel
            </Button>
            <Button>Create</Button>
          </CardFooter>
        </Card>
      )}

      {!showCard && <Button onClick={handleClick}>Create Task</Button>}
    </>
  );
}
