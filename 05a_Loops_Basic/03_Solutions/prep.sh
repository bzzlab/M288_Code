#!/bin/bash
#
TOOL="../../bin/aprep.sh"
DEST="../02_Exercises/"
"$TOOL" -p "$DEST" -j a01-B.js
"$TOOL" -p "$DEST" -j a02-A.js
"$TOOL" -p "$DEST" -h a03-B.html -j a03-B.js
