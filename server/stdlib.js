function writeFile(name, contents) {
  var out = new java.io.BufferedWriter(new java.io.FileWriter(name));
  out.write(contents);
  out.close();
}