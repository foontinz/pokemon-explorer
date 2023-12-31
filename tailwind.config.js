/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                glory: ["Glory", "sans"],
            },
            colors: {
                brown: "#594B4B",
                pokemon: {
                    bug: "#90C12C",
                    dark: "#5A5366",
                    dragon: "#0A6DC4",
                    electric: "#F3D23B",
                    fairy: "#EC8FE6",
                    fighting: "#CE4069",
                    fire: "#FD820B",
                    flying: "#8FA8DD",
                    ghost: "#5269AC",
                    grass: "#80E220",
                    ground: "#D97746",
                    ice: "#74CEC0",
                    normal: "#9099A1",
                    poison: "#8962F8",
                    psychic: "#F97176",
                    rock: "#C7B78B",
                    steel: "#5A8EA1",
                    water: "#4D90D5",
                },
            },
            backgroundColor: {
                gray: "#F2F2F2",
            },
        },
    },
    plugins: [],
}
