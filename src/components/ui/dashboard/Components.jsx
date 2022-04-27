import React from 'react'

export const LeftOne = (props) => {
    return (
        <svg className={props.className} width="313px" height="80px" viewBox="0 0 313 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Rect 1</title>
            <g id="⚡️-Storm-–-Standalone" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path d="M266.961061,79.999797 L0,80 L0,0 L312.767802,-0.00333351626 C291.443865,22.1663214 275.480006,49.528977 266.961061,79.999797 Z" id="Rect-1" fill="#424E5B"></path>
            </g>
            <foreignObject width="313px" height="80px">
                {props.children}
            </foreignObject>
        </svg>
    )
}

export const LeftTwo = (props) => {
    return (
        <svg className={props.className} width="266px" height="80px" viewBox="0 0 266 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Rect 2</title>
            <g id="⚡️-Storm-–-Standalone" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path d="M260,36 C260,51.1498461 261.782504,65.8833663 265.149226,80.002275 L0,80 L0,2.84217094e-13 L263.424953,-0.00265823222 C261.17712,11.6523577 260,23.6887132 260,36 Z" id="Rect-2" fill="#424E5B"></path>
            </g>
            <foreignObject width="313px" height="80px">
                {props.children}
            </foreignObject>
        </svg>
    )
}

export const LeftThree = (props) => {
    return (
        <svg className={props.className} width="321px" height="81px" viewBox="0 0 321 81" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <title>Rect 3</title>
            <g id="⚡️-Storm-–-Standalone" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path d="M320.940964,80.0045149 L0,80 L0,0 L269.391878,0.00217851612 C279.559699,30.9725221 297.514595,58.4118345 320.940964,80.0045149 Z" id="Rect-3" fill="#424E5B"></path>
            </g>
            <foreignObject width="313px" height="80px">
                {props.children}
            </foreignObject>
        </svg>
    )
}

export const LeftFour = (props) => {
    return (
        <svg className={props.className} width="449px" height="83px" viewBox="0 0 449 83" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Rect 4</title>
            <g id="⚡️-Storm-–-Standalone" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path d="M449,38 L449,79.7263339 L0,83 L0,3 L336.055634,0.55501387 C367.565175,24.075203 406.656432,38 449,38 Z" id="Rect-4" fill="#424E5B"></path>
            </g>
            <foreignObject width="313px" height="80px">
                {props.children}
            </foreignObject>
        </svg>
    )
}


export const RightOne = (props) => {
    return (
        <svg className={props.className} width="373px" height="81px" fill="#000"  viewBox="0 0 373 81" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <title>Right 1</title>
            <g id="🙋‍♂️-Punters" stroke="none"  stroke-width="1">
                <path d="M326.961758,80.0038546 L0.000696480023,80.0040576 L0.000696480023,0.0040576152 L372.768498,0.000724098933 C351.444561,22.170379 335.480702,49.5330346 326.961758,80.0038546 Z" id="Right-1" fill="#424E5B" transform="translate(186.384597, 40.002391) scale(-1, 1) translate(-186.384597, -40.002391) "></path>
            </g>
            <foreignObject width="373px" height="80px">
                {props.children}
            </foreignObject>
        </svg>
    )
}


export const RightTwo = (props) => {
    return (
        <svg className={props.className} width="326px" height="81px" viewBox="0 0 326 81" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <title>Right 2</title>
            <g id="🙋‍♂️-Punters" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path d="M319.999884,36.0026582 C319.999884,51.1525044 321.782388,65.8860245 325.14911,80.0049333 L-0.000115932664,80.0026582 L-0.000115932664,0.00265823222 L323.424837,-8.99918414e-15 C321.177004,11.6550159 319.999884,23.6913715 319.999884,36.0026582 Z" id="Right-2" fill="#424E5B" transform="translate(162.574497, 40.002467) scale(-1, 1) translate(-162.574497, -40.002467) "></path>
            </g>
            <foreignObject width="323px" height="80px">
                {props.children}
            </foreignObject>
        </svg>
    )
}

export const LargeGauge = ({
    className,
    text = '24',
}) => {
    return (
        <svg className={className} width="320px" height="320px" viewBox="0 0 320 320" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Storm Rating</title>
            <defs>¬
                <path d="M160,320 C248.36556,320 320,248.36556 320,160 C320,71.63444 248.36556,0 160,0 C71.63444,0 0,71.63444 0,160 C0,248.36556 71.63444,320 160,320 Z" id="path-1"></path>
                <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="320" height="320" fill="white">
                    <use xlinkHref="#path-1"></use>
                </mask>
            </defs>
            <g id="🙋‍♂️-Punters" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Storm-Rating" stroke='#FFF'>
                    <use id="Oval" mask="url(#mask-2)" stroke-width="76.6584" stroke-dasharray="10.22112007141111" xlinkHref="#path-1"></use>
                    <circle id="Oval-Copy-3" stroke-width="7.66584" cx="160" cy="160" r="101.12708"
                    
                    ></circle>
                    <text x="50%" y="50%" dominant-baseline="middle" font-size="66px" font-weight="bold" font-family="GothamLight" fill='white' text-anchor="middle">{text}</text>
                </g>
            </g>
        </svg>
    )
}

export const Ticker = (props) => {
    return (
        <svg className={props.className} width="86px" height="63px" viewBox="0 0 86 63" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Ticker Triangle</title>
            <g id="⚡️-Storm-–-Standalone" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path d="M41.9452263,0.534216237 L0.378545364,60.9948431 C-0.0219477293,61.5773785 0.125626725,62.3742806 0.708162134,62.7747737 C0.921536049,62.9214682 1.17438328,63 1.43331903,63 L84.566681,63 C85.2736055,63 85.846681,62.4269245 85.846681,61.72 C85.846681,61.4610642 85.7681492,61.208217 85.6214546,60.9948431 L44.0547737,0.534216237 C43.6542806,-0.0483191715 42.8573785,-0.195893626 42.2748431,0.204599467 C42.1457218,0.293370358 42.0339972,0.405094942 41.9452263,0.534216237 Z" id="Ticker-Triangle" fill={props.color}></path>
            </g>
        </svg>
    )
}

export const SmallGauge = ({
    text = 34,
    content1 = '72',
    content2 = '73',
    content3 = '23', 
    className}
    ) => {
    return(
        <svg className={className} width="320px" height="320px" viewBox="0 0 320 320" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Storm Rating</title>
            <defs>
                <path d="M160,320 C248.36556,320 320,248.36556 320,160 C320,71.63444 248.36556,0 160,0 C71.63444,0 0,71.63444 0,160 C0,248.36556 71.63444,320 160,320 Z" id="path-1"></path>
                <mask id="mask-small2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="320" height="320" fill="white">
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
                    <use id="Oval" mask="url(#mask-small2)" stroke-width="76.6584" stroke-dasharray="10.22112007141111" xlinkHref="#path-1"></use>
                    <circle id="Oval-Copy-3" stroke-width="7.66584" cx="160" cy="160" r="101.12708"
                    
                    ></circle>
                    <text x="50%" y="35%" dominant-baseline="middle" font-size="26px" font-weight="bold" font-family="GothamLight" stroke='white' text-anchor="middle">{content1}</text>
                    <text x="50%" y="50%" dominant-baseline="middle" font-size="26px" font-weight="bold" font-family="GothamLight" stroke='#7E25FF' text-anchor="middle">{content2}</text>
                    <text x="50%" y="65%" dominant-baseline="middle" font-size="26px" font-weight="bold" font-family="GothamLight" stroke='#E584F3' text-anchor="middle">{content3}</text>
                </g>
            </g>
        </svg>
    )
}


export const ProgressBar = ({
    className,
    color = "#7E25FF",
    percent}) => {
    return (
        <svg className={className} fill='url(#pbar)' width="460px" height="43px" viewBox="0 0 460 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Progress</title>
            <defs>
                <linearGradient id="pbar" x1="0%" y1="0%" x2="100%" y2="20%" gradientUnits="userSpaceOnUse" gradientTransform="rotate(18)">
                    <stop offset={percent} stop-color="#7E25FF"/>
                    <stop offset={percent} stop-color="#FFF"/>
                </linearGradient>
            </defs>
            <g id="🙋‍♂️-Punters" stroke-width="1" >
                <g fill='url(#pbar)' id="Progress" >
                    <polygon id="Rectangle" points="14.4200627 1.40235046e-14 27.3981191 1.40235046e-14 12.9780564 43 0 43"></polygon>
                    <polygon id="Rectangle-1" points="36.0501567 1.40235046e-14 49.0282132 1.40235046e-14 34.6081505 43 21.630094 43"></polygon>
                    <polygon id="Rectangle-2" points="57.6802508 1.40235046e-14 70.6583072 1.40235046e-14 56.2382445 43 43.2601881 43"></polygon>
                    <polygon id="Rectangle-3" points="79.3103448 1.40235046e-14 92.2884013 1.40235046e-14 77.8683386 43 64.8902821 43"></polygon>
                    <polygon id="Rectangle-4" points="100.940439 1.40235046e-14 113.918495 1.40235046e-14 99.4984326 43 86.5203762 43"></polygon>
                    <polygon id="Rectangle-5" points="122.570533 1.40235046e-14 135.548589 1.40235046e-14 121.128527 43 108.15047 43"></polygon>
                    <polygon id="Rectangle-6" points="144.200627 1.40235046e-14 157.178683 1.40235046e-14 142.758621 43 129.780564 43"></polygon>
                    <polygon id="Rectangle-7" points="165.830721 1.40235046e-14 178.808777 1.40235046e-14 164.388715 43 151.410658 43"></polygon>
                    <polygon id="Rectangle-8" points="187.460815 1.40235046e-14 200.438871 1.40235046e-14 186.018809 43 173.040752 43"></polygon>
                    <polygon id="Rectangle-9" points="209.090909 1.40235046e-14 222.068966 1.40235046e-14 207.648903 43 194.670846 43"></polygon>
                    <polygon id="Rectangle-10" points="230.721003 1.40235046e-14 243.69906 1.40235046e-14 229.278997 43 216.30094 43"></polygon>
                    <polygon id="Rectangle-11" points="252.351097 1.40235046e-14 265.329154 1.40235046e-14 250.909091 43 237.931034 43"></polygon>
                    <polygon id="Rectangle-12" points="273.981191 1.40235046e-14 286.959248 1.40235046e-14 272.539185 43 259.561129 43"></polygon>
                    <polygon id="Rectangle-13" points="295.611285 1.40235046e-14 308.589342 1.40235046e-14 294.169279 43 281.191223 43"></polygon>
                    <polygon id="Rectangle-14" points="317.241379 1.40235046e-14 330.219436 1.40235046e-14 315.799373 43 302.821317 43"></polygon>
                    <polygon id="Rectangle-15" points="338.871473 1.40235046e-14 351.84953 1.40235046e-14 337.429467 43 324.451411 43"></polygon>
                    <polygon id="Rectangle-16" points="360.501567 1.40235046e-14 373.479624 1.40235046e-14 359.059561 43 346.081505 43"></polygon>
                    <polygon id="Rectangle-17" points="382.131661 1.40235046e-14 395.109718 1.40235046e-14 380.689655 43 367.711599 43"></polygon>
                    <polygon id="Rectangle-18" points="403.761755 1.40235046e-14 416.739812 1.40235046e-14 402.319749 43 389.341693 43"></polygon>
                    <polygon id="Rectangle-19" points="425.39185 1.40235046e-14 438.369906 1.40235046e-14 423.949843 43 410.971787 43"></polygon>
                    <polygon id="Rectangle-Copy-20" points="447.021944 1.40235046e-14 460 1.40235046e-14 445.579937 43 432.601881 43"></polygon>
                </g>
            </g>
        </svg>
    )
}

export const ProgressBar2 = ({
    className,
    color = "#7E25FF",
    percent}) => {
    return (
        <svg className={className} fill='url(#pbar)' width="460px" height="43px" viewBox="0 0 460 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Progress</title>
            <defs>
                <linearGradient id="pbar" x1="0%" y1="0%" x2="100%" y2="20%" gradientUnits="userSpaceOnUse" gradientTransform="rotate(18)">
                    <stop offset={percent} stop-color="#7E25FF"/>
                    <stop offset={percent} stop-color="#FFF"/>
                </linearGradient>
            </defs>
            <g id="🙋‍♂️-Punters" stroke-width="1" >
                <g fill='url(#pbar)' id="Progress" >
                    <polygon id="Rectangle" points="14.4200627 1.40235046e-14 27.3981191 1.40235046e-14 12.9780564 43 0 43"></polygon>
                    <polygon id="Rectangle-1" points="36.0501567 1.40235046e-14 49.0282132 1.40235046e-14 34.6081505 43 21.630094 43"></polygon>
                    <polygon id="Rectangle-2" points="57.6802508 1.40235046e-14 70.6583072 1.40235046e-14 56.2382445 43 43.2601881 43"></polygon>
                    <polygon id="Rectangle-3" points="79.3103448 1.40235046e-14 92.2884013 1.40235046e-14 77.8683386 43 64.8902821 43"></polygon>
                    <polygon id="Rectangle-4" points="100.940439 1.40235046e-14 113.918495 1.40235046e-14 99.4984326 43 86.5203762 43"></polygon>
                    <polygon id="Rectangle-5" points="122.570533 1.40235046e-14 135.548589 1.40235046e-14 121.128527 43 108.15047 43"></polygon>
                    <polygon id="Rectangle-6" points="144.200627 1.40235046e-14 157.178683 1.40235046e-14 142.758621 43 129.780564 43"></polygon>
                    <polygon id="Rectangle-7" points="165.830721 1.40235046e-14 178.808777 1.40235046e-14 164.388715 43 151.410658 43"></polygon>
                    <polygon id="Rectangle-8" points="187.460815 1.40235046e-14 200.438871 1.40235046e-14 186.018809 43 173.040752 43"></polygon>
                    <polygon id="Rectangle-9" points="209.090909 1.40235046e-14 222.068966 1.40235046e-14 207.648903 43 194.670846 43"></polygon>
                    <polygon id="Rectangle-10" points="230.721003 1.40235046e-14 243.69906 1.40235046e-14 229.278997 43 216.30094 43"></polygon>
                    <polygon id="Rectangle-11" points="252.351097 1.40235046e-14 265.329154 1.40235046e-14 250.909091 43 237.931034 43"></polygon>
                    <polygon id="Rectangle-12" points="273.981191 1.40235046e-14 286.959248 1.40235046e-14 272.539185 43 259.561129 43"></polygon>
                    <polygon id="Rectangle-13" points="295.611285 1.40235046e-14 308.589342 1.40235046e-14 294.169279 43 281.191223 43"></polygon>
                    <polygon id="Rectangle-14" points="317.241379 1.40235046e-14 330.219436 1.40235046e-14 315.799373 43 302.821317 43"></polygon>
                    <polygon id="Rectangle-15" points="338.871473 1.40235046e-14 351.84953 1.40235046e-14 337.429467 43 324.451411 43"></polygon>
                    <polygon id="Rectangle-16" points="360.501567 1.40235046e-14 373.479624 1.40235046e-14 359.059561 43 346.081505 43"></polygon>
                    <polygon id="Rectangle-17" points="382.131661 1.40235046e-14 395.109718 1.40235046e-14 380.689655 43 367.711599 43"></polygon>
                    <polygon id="Rectangle-18" points="403.761755 1.40235046e-14 416.739812 1.40235046e-14 402.319749 43 389.341693 43"></polygon>
                    <polygon id="Rectangle-19" points="425.39185 1.40235046e-14 438.369906 1.40235046e-14 423.949843 43 410.971787 43"></polygon>
                    <polygon id="Rectangle-Copy-20" points="447.021944 1.40235046e-14 460 1.40235046e-14 445.579937 43 432.601881 43"></polygon>
                </g>
            </g>
        </svg>
    )
}

export const ProgressBar3 = ({
    className,
    color = "#7E25FF",
    percent}) => {
    return (
        <svg className={className} fill='url(#pbar)' width="460px" height="43px" viewBox="0 0 460 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Progress</title>
            <defs>
                <linearGradient id="pbar" x1="0%" y1="0%" x2="100%" y2="20%" gradientUnits="userSpaceOnUse" gradientTransform="rotate(18)">
                    <stop offset={percent} stop-color="#7E25FF"/>
                    <stop offset={percent} stop-color="#FFF"/>
                </linearGradient>
            </defs>
            <g id="🙋‍♂️-Punters" stroke-width="1" >
                <g fill='url(#pbar)' id="Progress" >
                    <polygon id="Rectangle" points="14.4200627 1.40235046e-14 27.3981191 1.40235046e-14 12.9780564 43 0 43"></polygon>
                    <polygon id="Rectangle-1" points="36.0501567 1.40235046e-14 49.0282132 1.40235046e-14 34.6081505 43 21.630094 43"></polygon>
                    <polygon id="Rectangle-2" points="57.6802508 1.40235046e-14 70.6583072 1.40235046e-14 56.2382445 43 43.2601881 43"></polygon>
                    <polygon id="Rectangle-3" points="79.3103448 1.40235046e-14 92.2884013 1.40235046e-14 77.8683386 43 64.8902821 43"></polygon>
                    <polygon id="Rectangle-4" points="100.940439 1.40235046e-14 113.918495 1.40235046e-14 99.4984326 43 86.5203762 43"></polygon>
                    <polygon id="Rectangle-5" points="122.570533 1.40235046e-14 135.548589 1.40235046e-14 121.128527 43 108.15047 43"></polygon>
                    <polygon id="Rectangle-6" points="144.200627 1.40235046e-14 157.178683 1.40235046e-14 142.758621 43 129.780564 43"></polygon>
                    <polygon id="Rectangle-7" points="165.830721 1.40235046e-14 178.808777 1.40235046e-14 164.388715 43 151.410658 43"></polygon>
                    <polygon id="Rectangle-8" points="187.460815 1.40235046e-14 200.438871 1.40235046e-14 186.018809 43 173.040752 43"></polygon>
                    <polygon id="Rectangle-9" points="209.090909 1.40235046e-14 222.068966 1.40235046e-14 207.648903 43 194.670846 43"></polygon>
                    <polygon id="Rectangle-10" points="230.721003 1.40235046e-14 243.69906 1.40235046e-14 229.278997 43 216.30094 43"></polygon>
                    <polygon id="Rectangle-11" points="252.351097 1.40235046e-14 265.329154 1.40235046e-14 250.909091 43 237.931034 43"></polygon>
                    <polygon id="Rectangle-12" points="273.981191 1.40235046e-14 286.959248 1.40235046e-14 272.539185 43 259.561129 43"></polygon>
                    <polygon id="Rectangle-13" points="295.611285 1.40235046e-14 308.589342 1.40235046e-14 294.169279 43 281.191223 43"></polygon>
                    <polygon id="Rectangle-14" points="317.241379 1.40235046e-14 330.219436 1.40235046e-14 315.799373 43 302.821317 43"></polygon>
                    <polygon id="Rectangle-15" points="338.871473 1.40235046e-14 351.84953 1.40235046e-14 337.429467 43 324.451411 43"></polygon>
                    <polygon id="Rectangle-16" points="360.501567 1.40235046e-14 373.479624 1.40235046e-14 359.059561 43 346.081505 43"></polygon>
                    <polygon id="Rectangle-17" points="382.131661 1.40235046e-14 395.109718 1.40235046e-14 380.689655 43 367.711599 43"></polygon>
                    <polygon id="Rectangle-18" points="403.761755 1.40235046e-14 416.739812 1.40235046e-14 402.319749 43 389.341693 43"></polygon>
                    <polygon id="Rectangle-19" points="425.39185 1.40235046e-14 438.369906 1.40235046e-14 423.949843 43 410.971787 43"></polygon>
                    <polygon id="Rectangle-Copy-20" points="447.021944 1.40235046e-14 460 1.40235046e-14 445.579937 43 432.601881 43"></polygon>
                </g>
            </g>
        </svg>
    )
}



