const pkg = require('./package.json');

module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'Chris Zubak-Skees',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'A developer, designer and journalist'
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/png',
                href: `/favicon.png`
            },
            {
                rel: "stylesheet",
                href:
                    "//fonts.googleapis.com/css?family=Open+Sans"
            },
            {
                rel: "stylesheet",
                href: '//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css'
            }
        ]
    },
    modules: [
        [
            '@nuxtjs/google-analytics',
            {
                id: 'UA-28635825-1'
            }
        ]
    ],
    /*
     ** Global CSS
     */
    css: ['~/assets/css/main.css'],
    /*
     ** Add axios globally
     */
    build: {
        html: {
            minify: {
                collapseWhitespace: false,
                removeEmptyAttributes: false
            }
        },
        extend(config, ctx) {
            config.module.rules.push({
                test: /\.(yaml|yml)$/,
                loader: 'js-yaml-loader',
                exclude: /(node_modules)/
            });

            if (ctx.isClient && process.env.NODE_ENV !== 'production') {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }
        }
    }
};
