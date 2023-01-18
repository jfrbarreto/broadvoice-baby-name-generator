const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const path = require("path");

const entry = "./src/app/index.tsx";

const moduleDef = {
  rules: [
    {
      test: /\.(?:ts|tsx)$/,
      exclude: /node_modules/,
      resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
      },
      use: "ts-loader",
    },
    {
      test: /\.(ico|jpg|jpeg|png|gif)$/,
      use: ["url-loader"],
    },
    {
      test: /\.(?:woff|ttf|eot|svg)(?:\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts/",
          },
        },
      ],
    },
  ],
};

const resolveDef = {
  alias: {
    "@components": path.resolve(__dirname, "./src/app/components/@exports"),
    "@views": path.resolve(__dirname, "./src/app/views/@exports"),
    "@helpers": path.resolve(__dirname, "./src/lib/helpers/@exports"),
    "@mocks": path.resolve(__dirname, "./src/lib/mocks/@exports"),
    "@stores": path.resolve(__dirname, "./src/lib/stores/@exports"),
    "@theme": path.resolve(__dirname, "./src/lib/theme/@exports"),
    "@types": path.resolve(__dirname, "./src/lib/types/@exports"),
  },
};

const pluginDef = () => {
  return [
    new HtmlWebpackPlugin({
      template: "./public/template.html",
      filename: "index.html",
      inject: "head",
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
      emitWarning: true,
    }),
  ];
};

const devServerDef = {
  port: 4444,
  historyApiFallback: true,
};

module.exports = {
  entry,
  moduleDef,
  resolveDef,
  pluginDef,
  devServerDef,
};
