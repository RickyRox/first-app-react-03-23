// sono nella cartella e nel file Header, quindi creo il mio componente Header

import Button from "../Button";

function Header() {
    return (
        <>
            <p>header</p>
            <header>
            <svg width="561" height="562" viewBox="0 0 561 562" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" d="M67.839 561.811L67.839 0.810791M138.628 561.811L138.628 0.810791M209.416 561.811L209.416 0.810791M280.205 561.811L280.205 0.810791M350.994 561.811L350.994 0.810791M421.782 561.811L421.782 0.810791M492.571 561.811L492.571 0.810791M1.85651e-05 68.6499H561M1.54709e-05 139.439H561M1.23767e-05 210.227H561M9.28253e-06 281.016H561M6.18835e-06 351.805H561M3.09418e-06 422.593H561M0 493.382H561" stroke="url(#paint0_radial_4_2656)"/>
                <defs>
                <radialGradient id="paint0_radial_4_2656" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(280.5 281.311) rotate(90) scale(280.5)">
                <stop/>
                <stop offset="1" stop-opacity="0"/>
                </radialGradient>
                </defs>
                </svg>
        <h1>
            Basic landing page for big dream
        </h1>
        <p class="subtitle">
            Minimal, responsive and accessible
        </p>
        <button>
            Explore repo
        </button>
    </header>
        </>
    );
}

// esporto il componente di default perché è l'unico presente
export default Header;