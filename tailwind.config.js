/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                customGray: "#2F2626",
                customBlue: "#1877F2",
                cutomOrange: "#E26B2B",
                customPink: "#FCAF45",
                customPink2: "#FCF2D8",
                customBrown: "#422D26",
                customBrown2: "#A64F24",
                customBrown3: "#825533",
                customCream: "#F6F5F5",
                customGreen: "#005051",
                customGray2: "#C1C1C1",
                customBlue2: "#0A1551",
                customCream2: "#E8D9C4",
                customBlack: "#00000080",
                customBlack2: "#000000",
                customWhite: "#F4F4F4",
                customBeige: "#E6DDD8", 
                customTeal: "#D69869",
                customBlur: "#D9D9D9",
                customSalmon: "#E1B493"
               

            },
            screens: {
                mediumLarge: "1080px",
                mediumLarge2: "980px"
            },
            fontFamily: {
                custom: ["CustomFont", "STIX+Two+Text"],
                inter: "Inter",
                "irish-grover": "'Irish Grover'",
                ruda: "Ruda",
            },
            borderRadius: {
                mini: "15px",
                "3xs": "10px",
                "12xs": "1px",
                "8xs": "5px",
                "177xl": "196px",
            },
        },
    },
    fontSize: {
        xl: "20px",
        base: "16px",
        smi: "13px",
        "3xl": "22px",
        lg: "18px",
        "131xl": "150px",
        "41xl": "60px",
        "18xl": "37px",
        "11xl": "30px",
        "5xl": "24px",
        "3xs": "10px",
        "31xl": "50px",
        "21xl": "40px",
        inherit: "inherit",
    },
    variants: {
        extend: {
            translate: ["group-hover"],
        },
    },
    plugins: [],
}
