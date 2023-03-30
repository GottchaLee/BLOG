module.exports = {
    content:[
        './src/**/*{.vue,.js,.ts,.jsx,.tsx}',
        "./src/**/*{.otf,.ttf,.woff,.woff2,.eot,.svg}",
        './index/html'
    ],
    // darkMode:'class',
    theme:{
        colors:{
            red: {
                lighter: "#ff0000",
                default: "#8b0000",
                darker: "#ffb6c1"
            },
            orange: {
                lighter: "#ffa500",
                default: "#ff8c00",
                darker: "#ffdab9"
            },
            yellow: {
                lighter: "#ffff00",
                default: "#ffd700",
                darker: "#ffffe0"
            },
            green: {
                lighter: "#008000",
                default: "#006400",
                darker: "#90ee90"
            },
            blue: {
                lighter: "#0000ff",
                default: "#00008b",
                darker: "#add8e6"
            },
            indigo: {
                lighter: "#4b0082",
                default: "#191970",
                darker: "#e6e6fa"
            },
            purple: {
                lighter: "#800080",
                default: "#483d8b",
                darker: "#dda0dd"
            },
            pink: {
                lighter: "#ffc0cb",
                default: "#ff69b4",
                darker: "#fff0f5"
            },
            brown: {
                lighter: "#a52a2a",
                default: "#8b0000",
                darker: "#f4a460"
            },
            silver: {
                lighter: "#c0c0c0",
                default: "#a9a9a9",
                darker: "#d3d3d3"
            },
            gray: {
                lighter: "#808080",
                default: "#696969",
                darker: "#dcdcdc"
            },
            white: {
                lighter: "#ffffff",
                default: "#f0f0f0",
                darker: "#ffffff"
            },
            black: {
                lighter: "#000000",
                default: "#1c1c1c",
                darker: "#808080"
            },
            cyan: {
                lighter: "#00ffff",
                default: "#008b8b",
                darker: "#e0ffff"
            },
            lemon: {
                lighter: "#effd5f",
                default: "#e6d917",
                darker: "#ffffd9"
            },
            lime: {
                lighter: "#a6ff00",
                default: "#32cd32",
                darker: "#e0ffe0"
            },
            peach: {
                lighter: "#ffdab9",
                default: "#ffb347",
                darker: "#ffe5b4"
            },
            teal: {
                lighter: "#008080",
                default: "#006766",
                darker: "#e0f2f1"
            },
            lavender: {
                lighter: "#e6e6fa",
                default: "#cdc1ff",
                darker: "#f5f5fd"
            },
            olive: {
                lighter: "#808000",
                default: "#556b2f",
                darker: "#f8dc81"
            }
            
        },
        extend:{
            fontFamily:{
                "custom":["myfont", "sans-serif"] 
            }
        }
    }
}