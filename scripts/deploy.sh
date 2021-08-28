NODE_DEBUG=gh-pages
yarn build
touch build/.nojekyll
gh-pages -d build -t