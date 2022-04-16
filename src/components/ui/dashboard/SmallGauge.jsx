import React from 'react'

export default function SmallGauge() {
  return (
    <svg width="320px" height="320px" viewBox="0 0 320 320" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>Storm Rating</title>
        <defs>
            <path d="M160,320 C248.36556,320 320,248.36556 320,160 C320,71.63444 248.36556,0 160,0 C71.63444,0 0,71.63444 0,160 C0,248.36556 71.63444,320 160,320 Z" id="path-1"></path>
            <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="320" height="320" fill="white">
                <use xlinkHref="#path-1"></use>
            </mask>
            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stop-color="#7E25FF"/>
                <stop offset="26%" stop-color="#E584F3"/>
                <stop offset="76%" stop-color="#FFF"/>
            </linearGradient>
        </defs>
        <g id="🙋‍♂️-Punters" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Storm-Rating" stroke="url(#linear)">
                <use id="Oval" mask="url(#mask-2)" stroke-width="76.6584" stroke-dasharray="10.22112007141111" xlinkHref="#path-1"></use>
                <circle id="Oval-Copy-3" stroke-width="7.66584" cx="160" cy="160" r="101.12708"
                
                ></circle>
                <text x="50%" y="35%" dominant-baseline="middle" font-size="26px" font-weight="bold" font-family="GothamLight" stroke='white' text-anchor="middle">74%</text>
                <text x="50%" y="50%" dominant-baseline="middle" font-size="26px" font-weight="bold" font-family="GothamLight" stroke='#7E25FF' text-anchor="middle">74%</text>
                <text x="50%" y="65%" dominant-baseline="middle" font-size="26px" font-weight="bold" font-family="GothamLight" stroke='#E584F3' text-anchor="middle">74%</text>
            </g>
        </g>
    </svg>
  )
}
