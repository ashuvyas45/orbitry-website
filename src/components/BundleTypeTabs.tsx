"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export type BundleTypeItem = {
  id: string;
  name: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

type BundleTypeTabsProps = {
  items: BundleTypeItem[];
};

export default function BundleTypeTabs({ items }: BundleTypeTabsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  const activeItem = useMemo(() => {
    return items.find((item) => item.id === activeId) ?? items[0];
  }, [activeId, items]);

  if (!activeItem) return null;

  return (
    <div className="mt-8">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {items.map((item) => {
          const isActive = item.id === activeItem.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={`rounded-xl border px-4 py-2 text-sm font-semibold transition-all ${
                isActive
                  ? "border-white/80 bg-white text-[#e03f2d]"
                  : "border-white/30 bg-white/5 text-orange-50 hover:bg-white/15"
              }`}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      <div className="mt-8 border-t border-white/25 pt-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <div className="lg:pr-8">
            <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {activeItem.name}
            </h3>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-orange-50 sm:text-lg">
              {activeItem.description}
            </p>
          </div>

          {activeItem.imageSrc ? (
            <div className="-mx-2 overflow-hidden rounded-2xl sm:-mx-4">
              <Image
                src={activeItem.imageSrc}
                alt={activeItem.imageAlt ?? `${activeItem.name} product page and widget preview`}
                width={2048}
                height={1433}
                className="h-auto w-full rounded-2xl object-contain"
                priority={activeItem.id === "fixed-bundle"}
              />
            </div>
          ) : (
            <div className="flex min-h-[240px] items-center justify-center rounded-2xl border-2 border-dashed border-white/35 bg-white/5 p-6 text-center sm:min-h-[300px]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-50/90">
                  Product page + widget
                </div>
                <div className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
                  Image placeholder
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
