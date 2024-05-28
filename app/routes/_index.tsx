"use client";
import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Drawer } from "vaul";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-y-6 p-6 pr-0">
        <h2 className="font-bold text-2xl">Click a tile to open the drawer</h2>
        <p className="font-bold text-xl">
          Horizontal overflow top of page: no flash
        </p>
        <div className="whitespace-nowrap overflow-x-scroll">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              className="inline-block w-80 h-80 rounded-lg cursor-pointer mr-4"
              onClick={() => setOpen(true)}
            >
              <img
                src={`/${image}`}
                alt={image}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
        <p className="font-bold text-xl">Scroll down to carousel</p>
        <div className="w-full h-screen bg-off-white-500 flex items-center justify-center">
          <p className="font-bold">Scroll down</p>
        </div>
        <div>
          <p className="font-bold text-xl">
            Down the page, no horizontal overflow: no flash
          </p>
          <p className="text-md text-gray-500">
            (sometimes the layout gets repositioned w/ a flash)
          </p>
        </div>
        <div className="whitespace-nowrap overflow-x-scroll">
          {images.slice(0, 2).map((image, index) => (
            <button
              key={index}
              type="button"
              className="inline-block w-1/2 h-80 rounded-lg cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <img
                src={`/${image}`}
                alt={image}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
        <p className="font-bold text-xl">
          Down the page and horizontal overflow: flash
        </p>
        <div className="whitespace-nowrap overflow-x-scroll">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              className="inline-block w-80 h-80 rounded-lg cursor-pointer mr-4"
              onClick={() => setOpen(true)}
            >
              <img
                src={`/${image}`}
                alt={image}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      </div>
      <ExampleDrawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
}

const ExampleDrawer = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Drawer.Root open={open} onClose={onClose}>
      {/* <Drawer.Trigger asChild>
        <button>Open Drawer</button>
      </Drawer.Trigger> */}
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4">
                Unstyled drawer for React.
              </Drawer.Title>
              <p className="text-zinc-600 mb-2">
                This component can be used as a replacement for a Dialog on
                mobile and tablet devices.
              </p>
              <p className="text-zinc-600 mb-8">
                It uses{" "}
                <a
                  href="https://www.radix-ui.com/docs/primitives/components/dialog"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Radix&rsquo;s Dialog primitive
                </a>{" "}
                under the hood and is inspired by{" "}
                <a
                  href="https://twitter.com/devongovett/status/1674470185783402496"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  this tweet.
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
            <div className="flex gap-6 justify-end max-w-md mx-auto">
              <a
                className="text-xs text-zinc-600 flex items-center gap-0.25"
                href="https://github.com/emilkowalski/vaul"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <svg
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="16"
                  aria-hidden="true"
                  className="w-3 h-3 ml-1"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </a>
              <a
                className="text-xs text-zinc-600 flex items-center gap-0.25"
                href="https://twitter.com/emilkowalski_"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
                <svg
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="16"
                  aria-hidden="true"
                  className="w-3 h-3 ml-1"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </a>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
