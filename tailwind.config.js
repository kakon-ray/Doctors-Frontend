module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#03B8D7",
          "base-100": "#ffffff",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
