#!/usr/bin/env bash

cd app/Resources/assets
./node_modules/grunt/bin/grunt
./node_modules/grunt/bin/grunt watch
cd ../../..