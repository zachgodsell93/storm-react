import React from "react";


export const Top = (props) => {
    return (
        <svg className={props.className} width="373px" height="80px" viewBox="0 0 373 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>top</title>
            <g id="⚡️-Storm-–-Standalone" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Document---Punter-STORM-Report" transform="translate(-342.000000, -330.000000)" fill="#424E5B">
                    <path d="M668.961061,409.999797 L342,410 L342,330 L714.767802,329.996666 C693.443865,352.166321 677.480006,379.528977 668.961061,409.999797 Z" id="top"></path>
                </g>
                <foreignObject width="313px" height="80px">
                    {props.children}
                </foreignObject>
            </g>
        </svg>
    )
}

export const Middle = (props) => {
    return (
        <svg className={props.className} width="326px" height="80px" viewBox="0 0 326 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>middle</title>
            <g id="⚡️-Storm-–-Standalone" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Document---Punter-STORM-Report" transform="translate(-342.000000, -425.000000)" fill="#424E5B">
                    <path d="M662,461 C662,476.149846 663.782504,490.883366 667.149226,505.002275 L342,505 L342,425 L665.424953,424.997342 C663.17712,436.652358 662,448.688713 662,461 Z" id="middle"></path>
                </g>
                <foreignObject width="313px" height="80px">
                    {props.children}
                </foreignObject>
            </g>
        </svg>
    )
}

export const Bottom = (props) => {
    return (
        <svg className={props.className} width="381px" height="81px" viewBox="0 0 381 81" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>bottom</title>
            <g id="⚡️-Storm-–-Standalone" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Document---Punter-STORM-Report" transform="translate(-342.000000, -520.000000)" fill="#424E5B">
                    <path d="M722.940964,600.004515 L342,600 L342,520 L671.391878,520.002179 C681.559699,550.972522 699.514595,578.411835 722.940964,600.004515 Z" id="bottom"></path>
                </g>
                <foreignObject width="313px" height="80px">
                    {props.children}
                </foreignObject>
            </g>
        </svg>
    )
}


export const LargeGauge = (props) => {
    return (
        <svg className={props.className} width="320px" height="320px" viewBox="0 0 320 320" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Storm Rating</title>
            <defs>
                <path d="M160,320 C248.36556,320 320,248.36556 320,160 C320,71.63444 248.36556,0 160,0 C71.63444,0 0,71.63444 0,160 C0,248.36556 71.63444,320 160,320 Z" id="path-1"></path>
                <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="320" height="320" fill="#FFF">
                    <use xlinkHref="#path-1"></use>
                </mask>
                <linearGradient id="Gradient2" gradientTransform="rotate(30)">
                    <stop offset="24%" stop-color="#00A8F0"/>
                    <stop offset="100%" stop-color="#8B36F7"/>
                </linearGradient>
            </defs>
            <g id="🙋‍♂️-Punters" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g stroke='url(#Gradient2)'>
                    <use id="Oval" mask="url(#mask-2)" stroke-width="76.6584" stroke-dasharray="10.22112007141111" xlinkHref="#path-1"></use>
                    <circle id="Oval-Copy-3" stroke-width="7.66584" cx="160" cy="160" r="101.12708"
                    
                    ></circle>
                    <text x="50%" y="50%" dominant-baseline="middle" font-size="66px" font-weight="bold" font-family="GothamLight" stroke="white" fill='white' text-anchor="middle">29</text>
                </g>
            </g>
        </svg>
    )
}

export const SoccerBall = () => {
    return (
        <svg width="23px" height="23px" viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Icon-soccer</title>
            <g id="⚡️-Storm-–-Standalone" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Document---Punter-STORM-Report" transform="translate(-910.000000, -164.000000)" fill="#5B6B81" fill-rule="nonzero" stroke="#5B6B81" stroke-width="0.807692308">
                    <g id="Group-4" transform="translate(713.000000, 155.000000)">
                        <g id="Icon-soccer" transform="translate(198.000000, 10.000000)">
                            <path d="M10.507252,0 C12.1117306,0 13.7385754,0.369152766 15.2652452,1.14601584 C20.4310784,3.77847114 22.4860291,10.099934 19.8535501,15.2648806 C17.9987392,18.9056492 14.3136885,21 10.4908712,21 C8.88723257,21 7.26038782,20.6316663 5.73371799,19.8539842 C0.567905787,17.2213189 -1.48538586,10.899856 1.14625313,5.73574943 C3.00022401,2.09598884 6.68611468,0 10.507252,0 Z M10.5071491,1.61125375 C10.1552138,1.61125375 9.80655473,1.63176317 9.45955472,1.67277991 L9.45955472,1.67277991 L7.22819535,4.08871655 L3.96484539,4.47427097 C3.41848261,5.0673767 2.95169273,5.73677847 2.57926047,6.46607464 C2.20680722,7.19780691 1.93938221,7.96566063 1.78105335,8.75810632 L1.78105335,8.75810632 L3.3897742,11.6276611 L2.74743672,14.8523401 C3.01977807,15.3388036 3.33643159,15.7973779 3.69821632,16.2280631 C4.38818414,17.0475789 5.21180251,17.7268301 6.15029651,18.2534891 L6.15029651,18.2534891 L9.37269446,17.6103384 L12.239755,19.2190448 C13.2380809,19.0172267 14.2003481,18.6472549 15.0814043,18.1189578 C15.6015158,17.8056042 16.0855055,17.4430037 16.5268631,17.0369315 L16.5268631,17.0369315 L16.912421,13.7719309 L19.3300595,11.5389116 C19.3456465,11.4051782 19.3579523,11.2722933 19.3677144,11.1364158 C19.4497444,9.99039992 19.3094575,8.8524904 18.951789,7.75486049 C18.8435077,7.42424427 18.7179845,7.10104134 18.5736025,6.78848584 L18.5736025,6.78848584 L15.5933464,5.41440088 L14.219249,2.42913147 C13.6786195,2.18056552 13.116695,1.98614815 12.5432619,1.8499703 C11.8771302,1.69164707 11.1929587,1.61125375 10.5071491,1.61125375 Z M8.79923825,7.38473539 L12.956749,8.04338474 L13.6154883,12.200081 L9.86491449,14.1106744 L6.88780856,11.1361154 L8.79923825,7.38473539 Z" id="Combined-Shape-Copy-5"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export const Horse = () => {
    return (
        <svg width="19px" height="22px" viewBox="0 0 19 22" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <title>icon-racing</title>
            <defs>
                <polygon id="path-123" points="0 0 17.94 0 17.94 21.62 0 21.62"></polygon>
            </defs>
            <g id="⚡️-Storm-–-Standalone" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Document---Punter-STORM-Report" transform="translate(-746.000000, -164.000000)">
                    <g id="Group-4" transform="translate(713.000000, 155.000000)">
                        <g id="Group" transform="translate(31.000000, 8.000000)">
                            <g id="Group-3" transform="translate(2.760000, 0.920000)">
                                <mask id="mask-12" fill="white">
                                    <use xlinkHref="#path-123"></use>
                                </mask>
                                <g id="Clip-2"></g>
                                <path d="M11.7137962,20.5370967 C11.7598749,20.2938144 11.8534077,20.0301166 11.9058595,19.7674786 C11.9641799,19.4759916 12.0033354,19.2196212 12.0411611,18.9121887 C12.1049377,18.3934108 12.0951259,17.565864 11.9723411,17.0791152 C11.8221843,16.4841589 11.696511,16.1417019 11.3867522,15.6924662 C10.5079561,14.4179879 9.8295221,13.0212463 9.87399605,11.3110813 C9.88875957,10.7416561 10.0679391,10.1611244 10.3195608,9.77645364 C10.5087356,9.4872708 11.022937,8.9429158 11.3568584,8.87867343 C12.1025535,9.79880482 12.6184055,10.4046371 13.6538232,10.9448445 C14.1627977,11.2103396 14.375264,11.1691397 14.7490286,11.2913569 C15.057366,12.6375894 15.8595935,13.0230437 16.9903322,12.4978139 C17.4010972,12.3069763 17.450798,12.3192809 17.6944419,11.956777 C18.0463821,11.4332063 17.9931968,10.4047754 17.7046663,9.86701049 C17.5527213,9.58377261 17.3736334,9.34638922 17.1978926,9.09375172 C16.8897844,8.6508757 15.9026461,5.24183636 14.7968037,3.87168579 C14.6966685,3.74757911 14.5803944,3.67702311 14.5449986,3.46807411 C14.5135,3.28221365 14.491584,3.10340419 14.4701265,2.91758981 C14.3631139,1.98861012 14.3469291,1.48877314 14.5530681,0.619427328 C14.3143301,0.741506265 13.7511615,1.14806738 13.6302107,1.3868794 C13.6279183,1.13981818 13.7503362,0.185169184 13.8709661,0.0862248739 C13.8646389,-0.0163140595 13.9023271,0.0323516096 13.8517093,0 C13.7690428,0.0800955804 13.631036,0.146503941 13.5238859,0.223650087 C13.409675,0.305957743 13.3113738,0.381490917 13.2025731,0.459743101 C12.974839,0.6234828 12.7976309,0.746483435 12.5811757,0.922251297 C11.57744,1.73744734 11.726955,1.89095619 11.553369,2.09220901 C11.1684631,2.04160777 10.830461,1.94178785 10.4030526,1.90717808 C7.92035177,1.70620177 5.65626098,2.3686724 3.79569105,3.97620637 C3.69674797,4.06169389 3.51894388,4.20570924 3.452829,4.30778733 C3.86111819,4.27469836 4.92225743,3.9455599 5.25746263,4.16842655 C5.02913246,4.3600937 4.675129,4.53784322 4.42951359,4.71190594 C3.97940972,5.03085963 3.28483668,5.52134137 2.89291574,5.86541133 C1.97844883,6.66802619 1.7061949,6.91186147 0.912311991,7.92388618 C0.624606807,8.29053776 0.0961921076,9.17449249 0,9.70147348 C0.298525649,9.59745983 1.21125029,8.86724437 1.86680546,8.90263758 L1.47910266,9.94106895 C0.564085558,12.9582483 4.00756127,15.2726326 6.23708158,16.4721308 C7.91274076,17.373736 10.6454586,18.6219459 11.7137962,20.5370967 L11.7137962,20.5370967 Z M11.5794115,21.62 C10.7581565,19.4065416 7.6842272,18.0156528 5.86139134,17.0349658 C4.24721625,16.1664495 2.49356719,15.133871 1.65080879,13.5412685 C1.49693809,13.2504727 1.36314945,12.9640089 1.23202008,12.6484655 C1.10121165,12.3337516 0.993282087,11.9288956 0.8066749,11.7181493 C0.543453313,13.2952212 0.491368359,14.2772446 1.78964087,15.5649032 C3.40344916,17.1654783 7.5023425,18.4490814 10.1323576,20.3867216 L11.5794115,21.62 Z" id="Fill-1" fill="#5B6B81" mask="url(#mask-12)"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}


export const PR1 = ({
    className,
    color = "#7E25FF",
    percent}) => {
    return (
        <svg className={className} fill='url(#pbar1)' width="460px" height="43px" viewBox="0 0 460 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Progress</title>
            <defs>
                <linearGradient id="pbar1" x1="0%" y1="0%" x2="100%" y2="20%" gradientUnits="userSpaceOnUse" gradientTransform="rotate(18)">
                    <stop offset={percent} stop-color={color}/>
                    <stop offset={percent} stop-color="#858A8F"/>
                </linearGradient>
            </defs>
            <g id="🙋‍♂️-Punters" stroke-width="1" >
                <g fill='url(#pbar1)' id="Progress" >
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

export const PR2 = ({
    className,
    color = "#7E25FF",
    percent}) => {
    return (
        <svg className={className} fill='url(#pbar2)' width="460px" height="43px" viewBox="0 0 460 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Progress</title>
            <defs>
                <linearGradient id="pbar2" x1="0%" y1="0%" x2="100%" y2="20%" gradientUnits="userSpaceOnUse" gradientTransform="rotate(18)">
                    <stop offset={percent} stop-color={color}/>
                    <stop offset={percent} stop-color="#858A8F"/>
                </linearGradient>
            </defs>
            <g id="🙋‍♂️-Punters" stroke-width="1" >
                <g fill='url(#pbar2)' id="Progress" >
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

export const PR3 = ({
    className,
    color = "#7E25FF",
    percent}) => {
    return (
        <svg className={className} fill='url(#pbar3)' width="460px" height="43px" viewBox="0 0 460 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Progress</title>
            <defs>
                <linearGradient id="pbar3" x1="0%" y1="0%" x2="100%" y2="20%" gradientUnits="userSpaceOnUse" gradientTransform="rotate(18)">
                    <stop offset={percent} stop-color={color}/>
                    <stop offset={percent} stop-color="#858A8F"/>
                </linearGradient>
            </defs>
            <g id="🙋‍♂️-Punters" stroke-width="1" >
                <g fill='url(#pbar3)' id="Progress" >
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

export const PR4 = ({
    className,
    color = "#7E25FF",
    percent}) => {
    return (
        <svg className={className} fill='url(#pbar4)' width="460px" height="43px" viewBox="0 0 460 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Progress</title>
            <defs>
                <linearGradient id="pbar4" x1="0%" y1="0%" x2="100%" y2="20%" gradientUnits="userSpaceOnUse" gradientTransform="rotate(18)">
                    <stop offset={percent} stop-color={color}/>
                    <stop offset={percent} stop-color="#858A8F"/>
                </linearGradient>
            </defs>
            <g id="🙋‍♂️-Punters" stroke-width="1" >
                <g fill='url(#pbar4)' id="Progress" >
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

export const PR5 = ({
    className,
    color = "#7E25FF",
    percent}) => {
    return (
        <svg className={className} fill='url(#pbar5)' width="460px" height="43px" viewBox="0 0 460 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Progress</title>
            <defs>
                <linearGradient id="pbar5" x1="0%" y1="0%" x2="100%" y2="20%" gradientUnits="userSpaceOnUse" gradientTransform="rotate(18)">
                    <stop offset={percent} stop-color={color}/>
                    <stop offset={percent} stop-color="#858A8F"/>
                </linearGradient>
            </defs>
            <g id="🙋‍♂️-Punters" stroke-width="1" >
                <g fill='url(#pbar5)' id="Progress" >
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

export const PR6 = ({
    className,
    color = "#7E25FF",
    percent}) => {
    return (
        <svg className={className} fill='url(#pbar6)' width="460px" height="43px" viewBox="0 0 460 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Progress</title>
            <defs>
                <linearGradient id="pbar6" x1="0%" y1="0%" x2="100%" y2="20%" gradientUnits="userSpaceOnUse" gradientTransform="rotate(18)">
                    <stop offset={percent} stop-color={color}/>
                    <stop offset={percent} stop-color="#858A8F"/>
                </linearGradient>
            </defs>
            <g id="🙋‍♂️-Punters" stroke-width="1" >
                <g fill='url(#pbar6)' id="Progress" >
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

export const PR7 = ({
    className,
    color = "#7E25FF",
    percent}) => {
    return (
        <svg className={className} fill='url(#pbar7)' width="460px" height="43px" viewBox="0 0 460 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Progress</title>
            <defs>
                <linearGradient id="pbar7" x1="0%" y1="0%" x2="100%" y2="20%" gradientUnits="userSpaceOnUse" gradientTransform="rotate(18)">
                    <stop offset={percent} stop-color={color}/>
                    <stop offset={percent} stop-color="#858A8F"/>
                </linearGradient>
            </defs>
            <g id="🙋‍♂️-Punters" stroke-width="1" >
                <g fill='url(#pbar7)' id="Progress" >
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

export const PR8 = ({
    className,
    color = "#7E25FF",
    percent}) => {
    return (
        <svg className={className} fill='url(#pbar8)' width="460px" height="43px" viewBox="0 0 460 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Progress</title>
            <defs>
                <linearGradient id="pbar8" x1="0%" y1="0%" x2="100%" y2="20%" gradientUnits="userSpaceOnUse" gradientTransform="rotate(18)">
                    <stop offset={percent} stop-color={color}/>
                    <stop offset={percent} stop-color="#858A8F"/>
                </linearGradient>
            </defs>
            <g id="🙋‍♂️-Punters" stroke-width="1" >
                <g fill='url(#pbar8)' id="Progress" >
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

export const Circle = (props) => {
    return (
        <svg height="20" width="20">
            <circle cx="10" cy="10" r="7" fill={props.color} />
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
                    <stop offset="0%"  stop-color="#7E25FF"/>
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

