# exif-orientation-math
Small library to compose multiple exif orientation values and convert an
orientation into flip and rotate instructions.

## Methods
### compose (Number, Number) -> Number
Given two EXIF orientation numbers (1-8), returns the EXIF orientation of the
result of doing both operations in sequence. This could be useful if you are
applying an additional EXIF orientation (say, from a database) on top of what
is stored in a file.
```
const exifmath = require('exif-orientation-math')
const neworientation = exifmath.compose(5, 7)
// neworientation: 3
```

### operations (Number) -> { flip: Boolean, angle: Number }
Given an EXIF orientation, returns the meaning in an object defining whether or
not to flip first, and a rotation angle to apply after the flip.
```
const exifmath = require('exif-orientation-math')
const operations = exifmath.operations(5)
// operations: { flip: true, angle: 270 }
