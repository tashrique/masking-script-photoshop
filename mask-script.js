// Open the image file
var fileRef = new File("path/to/image.jpg");
var docRef = app.open(fileRef);

// Select the layer with the image
var layerRef = docRef.activeLayer;

// Add a new layer mask
layerRef.layerMaskEnabled = true;
var maskRef = layerRef.layerMask;

// Fill the mask with black
maskRef.applyAdd("Black");

// Create a new selection based on the image's edges
docRef.selection.select(docRef.bounds);
docRef.selection.expand(2);
docRef.selection.contract(2);
docRef.selection.smooth(2);

// Fill the selection with white to reveal the image
maskRef.invert();
maskRef.applyAdd("White");

// Save the file
var saveFile = new File("path/to/saved/file.jpg");
docRef.saveAs(saveFile);

// Close the file
docRef.close(SaveOptions.DONOTSAVECHANGES);
