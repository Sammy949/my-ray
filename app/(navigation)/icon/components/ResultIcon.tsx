import React, { forwardRef, useMemo } from "react";
import { SettingsType } from "../lib/types";

// Remove heavy noise image import
// import noisePicture from "../assets/noise.inline.png";

interface ResultIconProps {
  settings: SettingsType;
  size?: number;
  IconComponent?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isPreview?: boolean;
}

const ResultIcon = forwardRef<SVGSVGElement, ResultIconProps>(
  ({ settings, size = 512, IconComponent, isPreview }, ref) => {
    const rectId = useMemo(() => `rect-${Math.random().toString(36).substring(7)}`, []);
    const gradientId = useMemo(() => `gradient-${Math.random().toString(36).substring(7)}`, []);
    const radialGlareGradientId = useMemo(() => `radialGlare-${Math.random().toString(36).substring(7)}`, []);
    const noiseFilterId = useMemo(() => `noise-${Math.random().toString(36).substring(7)}`, []);

    const strokeSize = isPreview ? 0 : settings.backgroundStrokeSize;
    const strokeWidth = isNaN(parseInt(strokeSize.toString())) ? 0 : parseInt(strokeSize.toString());
    const gradientX = settings.backgroundPosition?.split(",")[0];
    const gradientY = settings.backgroundPosition?.split(",")[1];

    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          {/* CSS-generated noise filter instead of heavy image */}
          {settings.backgroundNoiseTexture && (
            <filter id={noiseFilterId}>
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          )}
        </defs>

        <rect
          id={rectId}
          width={size - strokeSize}
          height={size - strokeSize}
          x={strokeSize / 2}
          y={strokeSize / 2}
          rx={settings.backgroundRadius}
          fill={settings.backgroundFillType === "Solid" ? settings.backgroundStartColor : `url(#${gradientId})`}
          stroke={settings.backgroundStrokeColor}
          strokeWidth={strokeWidth}
          strokeOpacity={`${settings.backgroundStrokeOpacity}%`}
          paintOrder="stroke"
        />

        {settings.backgroundRadialGlare ? (
          <rect
            width={size - strokeSize}
            height={size - strokeSize}
            x={strokeSize / 2}
            y={strokeSize / 2}
            fill={`url(#${radialGlareGradientId})`}
            rx={settings.backgroundRadius}
            style={{ mixBlendMode: "overlay" }}
          />
        ) : null}

        {/* Replace heavy noise image with CSS-generated noise */}
        {settings.backgroundNoiseTexture && !isPreview ? (
          <rect
            width={size - strokeSize}
            height={size - strokeSize}
            x={strokeSize / 2}
            y={strokeSize / 2}
            rx={settings.backgroundRadius}
            fill="white"
            opacity={`${settings.backgroundNoiseTextureOpacity / 100}`}
            filter={`url(#${noiseFilterId})`}
            style={{ mixBlendMode: "overlay" }}
          />
        ) : null}

        <clipPath id="clip">
          <use xlinkHref={`#${rectId}`} />
        </clipPath>

        <defs>
          {settings.backgroundFillType === "Radial" ? (
            <radialGradient
              id={gradientId}
              cx="50%"
              cy="50%"
              r="100%"
              fx={gradientX}
              fy={gradientY}
              gradientUnits="objectBoundingBox"
            >
              <stop stopColor={settings.backgroundStartColor} />
              <stop offset={settings.backgroundSpread / 100} stopColor={settings.backgroundEndColor} />
            </radialGradient>
          ) : (
            <linearGradient
              id={gradientId}
              gradientUnits="userSpaceOnUse"
              gradientTransform={`rotate(${settings.backgroundAngle})`}
              style={{ transformOrigin: "center" }}
            >
              <stop stopColor={settings.backgroundStartColor} />
              <stop offset="1" stopColor={settings.backgroundEndColor} />
            </linearGradient>
          )}
          <radialGradient
            id={radialGlareGradientId}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform={`translate(${size / 2}) rotate(90) scale(${size})`}
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>

        {IconComponent ? (
          <IconComponent
            width={settings.iconSize}
            height={settings.iconSize}
            x={(size - settings.iconSize) / 2 + +settings.iconOffsetX}
            y={(size - settings.iconSize) / 2 + +settings.iconOffsetY}
            style={{ color: settings.iconColor }}
            alignmentBaseline="middle"
          />
        ) : null}
      </svg>
    );
  },
);

ResultIcon.displayName = "ResultIcon";

export default ResultIcon;
