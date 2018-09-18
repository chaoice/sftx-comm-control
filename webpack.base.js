module.exports = {
    module: {
        rules: [
            {
                test: /\.js/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loaders: ['vue-loader'],
                exclude: /node_modules/,
            },
          {
            test: /\.css$/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  // 开启 CSS Modules
                  modules: true,
                  // 自定义生成的类名
                  localIdentName: '[local]_[hash:base64:8]'
                }
              }
            ]
          },
          {
            test: /\.scss$/,
            use:[ 'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  // 开启 CSS Modules
                  modules: true,
                  // 自定义生成的类名
                  localIdentName: '[local]_[hash:base64:8]'
                }
              },
              'sass-loader']
          },
          {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
          },

        ],
    },

    resolve: {
        extensions: ['.js', '.vue'],
    },
};
