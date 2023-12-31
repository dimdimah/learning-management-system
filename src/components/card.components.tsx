"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ItemProps {
  imageSrc?: string;
  title?: string;
  cost?: string;
  description?: string;
}

const CardKelas = ({
  imageSrc = "",
  title = "title",
  cost = "title",
  description = "description",
}: ItemProps) => {
  return (
    <div>
      <div className="max-w-sm m-4 overflow-hidden rounded-lg shadow-lg">
        <Link href={"/"}>
          <Card>
            <CardHeader>
              <CardTitle>
                <Image
                  alt="Dimah-luthfi"
                  src={imageSrc}
                  width={300}
                  height={300}
                />
                <h1>{title}</h1>
              </CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Cancel</Button>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default CardKelas;
