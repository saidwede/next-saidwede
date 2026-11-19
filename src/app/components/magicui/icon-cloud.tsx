"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "pointer",
    tooltip: "div",
    tooltipClass: "tctooltip",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

export const renderCustomIcon = (
  icon: SimpleIcon,
  theme: string,
  label?: string,
) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;
  const displayTitle =
    label || (icon.title && icon.title !== "icon" ? icon.title : icon.slug);

  return renderSimpleIcon({
    icon: { ...icon, title: displayTitle },
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      title: displayTitle,
      onClick: (e: any) => e.preventDefault(),
    },
    imgProps: {
      alt: displayTitle,
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
  iconLabels?: Record<string, string>;
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function IconCloud({
  iconSlugs,
  iconLabels,
}: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  useEffect(() => {
    const hideTooltip = () => {
      document.querySelectorAll<HTMLElement>(".tctooltip").forEach((el) => {
        el.style.display = "none";
      });
    };
    window.addEventListener("wheel", hideTooltip, { passive: true });
    return () => {
      window.removeEventListener("wheel", hideTooltip);
      hideTooltip();
    };
  }, []);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light", iconLabels?.[icon.slug]),
    );
  }, [data, theme, iconLabels]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const root = document.documentElement;
    root.style.setProperty("--tt-x", `${e.clientX}px`);
    root.style.setProperty("--tt-y", `${e.clientY}px`);
  };

  const handleMouseLeave = () => {
    document.querySelectorAll<HTMLElement>(".tctooltip").forEach((el) => {
      el.style.display = "none";
    });
  };

  return (
    <div
      className="w-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* @ts-ignore */}
      <Cloud {...cloudProps}>
        <>{renderedIcons}</>
      </Cloud>
    </div>
  );
}
