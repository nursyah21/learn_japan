#!/bin/bash

bun run build
cp i.toml dist/netlify.toml
git add .
git commit -m 'rebuild client'
git push