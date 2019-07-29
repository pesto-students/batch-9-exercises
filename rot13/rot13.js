function rot13(string) {
  return string.replace(/([A-M])|([a-m]])|([N-Z])|([n-z])/g, function(
    match,
    p1,
    p2,
    p3,
    p4
  ) {
    switch (match) {
      case p1:
        return String.fromCharCode(match.charCodeAt(0) + 13);
      case p2:
        return String.fromCharCode(match.charCodeAt(0) + 13);
      case p3:
        return String.fromCharCode(match.charCodeAt(0) - 13);
      case p4:
        return String.fromCharCode(match.charCodeAt(0) - 13);
    }
  });
}

export { rot13 };
