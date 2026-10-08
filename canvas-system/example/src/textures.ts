function toDataUrl(svg: string): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export const HOUSE_TEXTURE = toDataUrl(`
  <svg xmlns="http://www.w3.org/2000/svg" width="260" height="220" viewBox="0 0 260 220">
    <ellipse cx="130" cy="197" rx="91" ry="17" fill="#071019" opacity=".28"/>
    <path d="M45 98 129 50l86 48-86 50z" fill="#f5b657"/>
    <path d="m45 98 84 50v56L45 155z" fill="#bd583e"/>
    <path d="m129 148 86-50v57l-86 49z" fill="#8d3f38"/>
    <path d="M91 174v-38l27 15v39z" fill="#402c38"/>
    <path d="m152 143 35-20v27l-35 20z" fill="#7ad7db"/>
    <path d="M35 99 129 44l96 54-10 7-86-48-84 48z" fill="#ffe2a8"/>
  </svg>
`);

export const TREE_TEXTURE = toDataUrl(`
  <svg xmlns="http://www.w3.org/2000/svg" width="190" height="230" viewBox="0 0 190 230">
    <ellipse cx="95" cy="211" rx="62" ry="11" fill="#071019" opacity=".25"/>
    <path d="M82 123h27l8 84H73z" fill="#825338"/>
    <path d="m95 18 58 92-58 36-58-36z" fill="#4bb585"/>
    <path d="m95 18 58 92-58 9z" fill="#67d49c"/>
    <path d="m95 71 73 75-73 45-73-45z" fill="#278968"/>
    <path d="m95 71 73 75-73 17z" fill="#43b983"/>
  </svg>
`);

export const MAP_TEXTURE = toDataUrl(`
  <svg xmlns="http://www.w3.org/2000/svg" width="280" height="180" viewBox="0 0 280 180">
    <rect x="4" y="4" width="272" height="172" rx="18" fill="#15283a" stroke="#42647c" stroke-width="8"/>
    <path d="m35 128 45-51 42 26 43-56 75 65" fill="none" stroke="#6cdbd5" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="80" cy="77" r="9" fill="#f8c76d"/>
    <circle cx="165" cy="47" r="9" fill="#f8c76d"/>
    <path d="M36 145h207" stroke="#7890a2" stroke-width="5" stroke-linecap="round" opacity=".5"/>
  </svg>
`);

export const DEMO_TEXTURES = [
  HOUSE_TEXTURE,
  TREE_TEXTURE,
  MAP_TEXTURE,
];

